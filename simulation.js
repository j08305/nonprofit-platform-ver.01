
    let compIdCounter = 0;

    function createCompanyCard(id, initialData = {}) {
        compIdCounter++;
        const cardId = `compCard_${id || compIdCounter}`;
        const container = document.getElementById('companyContainer');

        const cardHtml = `
            <div class="card company-card" id="${cardId}">
                <button class="delete-card-btn" onclick="deleteCompany('${cardId}')">✕</button>
                <div class="card-header">
                    <input type="text" class="name-input comp-name" value="${initialData.name || '출연회사'}" oninput="update()">
                    <label style="color:var(--warning); cursor:pointer; font-size:0.8rem">
                        <input type="checkbox" class="comp-aff" ${initialData.isAff !== false ? 'checked' : ''} onchange="update()"> 계열기업
                    </label>
                </div>
                <div class="input-group">
                    <label>발행주식총수</label>
                    <input type="text" class="num-input comp-ts" value="${initialData.ts || '0'}" oninput="hInput(this)">
                    <span class="guide-text comp-guide">5%: 0 | 10%: 0</span>
                </div>
                <div class="input-group">
                    <label>출연 주식 수</label>
                    <input type="text" class="num-input comp-cs" value="${initialData.cs || '0'}" oninput="hInput(this)">
                    <span class="guide-text">출연 지분율: <span class="ratio-text comp-ratio">0.00%</span></span>
                </div>
                <div class="input-group"><label>주당 평가액(원)</label><input type="text" class="num-input comp-pr" value="${initialData.pr || '0'}" oninput="hInput(this)"></div>
                <div class="input-group"><label>현금 출연액(원)</label><input type="text" class="num-input comp-cash" value="${initialData.cash || '0'}" oninput="hInput(this)"></div>
                <div class="card-subtotal comp-subtotal"></div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', cardHtml);
        update();
    }

    function addNewCompany() { createCompanyCard(); }
    function deleteCompany(cardId) {
        if(document.querySelectorAll('.company-card').length <= 1) { alert("최소 한 명의 출연자는 있어야 합니다."); return; }
        document.getElementById(cardId).remove();
        update();
    }

    function resetAllInputs() {
        if(confirm('현재 모든 입력 내용을 초기화하시겠습니까?')) {
            document.getElementById('companyContainer').innerHTML = '';
            compIdCounter = 0;
            addNewCompany();
            ['annualBudget',
             'y1_op','y1_sale','y1_spend_pure','y1_spend_invest',
             'y2_op','y2_sale','y2_spend_pure','y2_spend_invest',
             'y3_op','y3_sale','y3_spend_pure','y3_spend_invest'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.value = "0";
            });
            ['y1_rate_stock','y1_rate_cash','y2_rate_stock','y2_rate_cash','y3_rate_stock','y3_rate_cash'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.value = "0";
            });
            document.querySelectorAll('input[type="checkbox"]').forEach(c => c.checked = false);
            const directRadio = document.querySelector('input[name="incomeMode"][value="direct"]');
            if (directRadio) directRadio.checked = true;
            update();
        }
    }

    function fNum(n) { if(!n) return "0"; let str = n.toString().replace(/\D/g, ""); return str.replace(/\B(?=(\d{3})+(?!\d))/g, ","); }
    function pNum(s) { return parseFloat(s.toString().replace(/,/g, "")) || 0; }
    function hInput(el) { el.value = fNum(el.value); update(); }

    function calcGiftTax(base) {
        if (base <= 0) return 0;
        if (base <= 1e8) return base * 0.1;
        if (base <= 5e8) return base * 0.2 - 1e7;
        if (base <= 1e9) return base * 0.3 - 6e7;
        if (base <= 3e9) return base * 0.4 - 1.6e8;
        return base * 0.5 - 4.6e8;
    }

    function getGiftTaxBracket(base) {
        if (base <= 1e8) return { rate: 10, deduct: 0 };
        if (base <= 5e8) return { rate: 20, deduct: 1e7 };
        if (base <= 1e9) return { rate: 30, deduct: 6e7 };
        if (base <= 3e9) return { rate: 40, deduct: 1.6e8 };
        return { rate: 50, deduct: 4.6e8 };
    }

    function updateGiftTaxTooltip(year, shortfall) {
        const fmt = v => fNum(Math.round(v)) + "원";
        const giftTax = calcGiftTax(shortfall);
        const setEl = (id, text) => { const el = document.getElementById(id); if (el) el.innerText = text; };

        setEl(`y${year}_gt_base`,   fmt(shortfall));
        setEl(`y${year}_gt_result`, fmt(giftTax));
        setEl(`y${year}_gift_tax`,  fmt(giftTax));

        if (shortfall > 0) {
            const { rate, deduct } = getGiftTaxBracket(shortfall);
            setEl(`y${year}_gt_rate`,   rate + "%");
            setEl(`y${year}_gt_deduct`, deduct > 0 ? fmt(deduct) : "없음");
            const formula = deduct > 0
                ? `${fmt(shortfall)} × ${rate}% − ${fmt(deduct)} = ${fmt(giftTax)}`
                : `${fmt(shortfall)} × ${rate}% = ${fmt(giftTax)}`;
            setEl(`y${year}_gt_formula`, formula);
        } else {
            setEl(`y${year}_gt_rate`,    "해당 없음");
            setEl(`y${year}_gt_deduct`,  "해당 없음");
            setEl(`y${year}_gt_formula`, "의무 충족 시 증여세 없음");
        }
    }

    // 운용소득: 입력 모드에 따라 직접금액 or 수익률 계산
    function getOpIncome(year, stockVal, cashVal) {
        const mode = document.querySelector('input[name="incomeMode"]:checked');
        const isRate = mode && mode.value === 'rate';

        // 입력 영역 표시 전환
        const directArea = document.getElementById(`y${year}_direct_area`);
        const rateArea   = document.getElementById(`y${year}_rate_area`);
        if (directArea) directArea.style.display = isRate ? 'none' : '';
        if (rateArea)   rateArea.style.display   = isRate ? '' : 'none';

        if (!isRate) {
            return pNum(document.getElementById(`y${year}_op`).value);
        }

        const rStock = (parseFloat(document.getElementById(`y${year}_rate_stock`).value) || 0) / 100;
        const rCash  = (parseFloat(document.getElementById(`y${year}_rate_cash`).value)  || 0) / 100;
        const income = stockVal * rStock + cashVal * rCash;
        const calcEl = document.getElementById(`y${year}_op_calc`);
        if (calcEl) calcEl.innerText = fNum(Math.round(income)) + "원";
        return income;
    }

    // 지출액: 순수 집행 + 투자 합산
    function getSpend(year) {
        const pure   = pNum(document.getElementById(`y${year}_spend_pure`).value);
        const invest = pNum(document.getElementById(`y${year}_spend_invest`).value);
        const total  = pure + invest;
        const totalEl = document.getElementById(`y${year}_spend_total`);
        if (totalEl) totalEl.innerText = fNum(Math.round(total)) + "원";
        return total;
    }

    // 가산세 툴팁 업데이트
    function updateTaxTooltip(year, req, spend, shortfall, rate, isCashTax) {
        const fmt = v => fNum(Math.round(v)) + "원";
        const setEl = (id, text) => { const el = document.getElementById(id); if (el) el.innerText = text; };
        setEl(`y${year}_tx_req`,   fmt(req));
        setEl(`y${year}_tx_spend`, fmt(spend));
        setEl(`y${year}_tx_sh`,    shortfall > 0 ? fmt(shortfall) : "없음 (의무 충족)");
        if (shortfall <= 0) {
            setEl(`y${year}_tx_rate`, "해당 없음");
        } else if (isCashTax) {
            setEl(`y${year}_tx_rate`, "증여세 누진세율 적용");
        } else {
            setEl(`y${year}_tx_rate`, (rate * 100).toFixed(0) + "%");
        }
        const shEl = document.getElementById(`y${year}_tx_sh`);
        if (shEl) shEl.className = shortfall > 0 ? 'tt-max' : '';
    }

    // 툴팁 내 산정 근거 업데이트 (최대값 항목에 ★ 강조)
    function updateTooltip(year, baseVal, opVal, saleVal, maxVal, cashVal, surplusVal) {
        const fmt = v => fNum(Math.round(v)) + "원";
        const mark = (v) => v === maxVal && v > 0 ? ' ★' : '';
        const cls  = (v) => v === maxVal && v > 0 ? 'class="tt-max"' : '';

        const set = (id, v) => {
            const el = document.getElementById(id);
            if (el) el.innerHTML = `<span ${cls(v)}>${fmt(v)}${mark(v)}</span>`;
        };

        set(`y${year}_tt_base`, baseVal);
        set(`y${year}_tt_op`,   opVal);
        set(`y${year}_tt_sale`, saleVal);

        // 3년차 전용 현금 기준
        if (cashVal !== undefined) {
            set(`y${year}_tt_cash`, cashVal);
        }

        // 잉여분 표시
        if (surplusVal !== undefined) {
            const surplusEl = document.getElementById(`y${year}_tt_surplus`);
            if (surplusEl) surplusEl.innerText = `-${fmt(surplusVal)}`;
        }
    }

    function update() {
        const cards = document.querySelectorAll('.company-card');
        let totalStockVal = 0, totalCashVal = 0, affStockVal = 0, totalExcessGiftTax = 0;
        let foundationHasStockOver5 = false, foundationHasStockOver10 = false;
        let tableHtml = "";

        cards.forEach(card => {
            const name  = card.querySelector('.comp-name').value;
            const ts    = pNum(card.querySelector('.comp-ts').value);
            const cs    = pNum(card.querySelector('.comp-cs').value);
            const pr    = pNum(card.querySelector('.comp-pr').value);
            const cash  = pNum(card.querySelector('.comp-cash').value);
            const isAff = card.querySelector('.comp-aff').checked;

            const ratio = ts > 0 ? (cs / ts) * 100 : 0;
            if (ratio > 5)  foundationHasStockOver5  = true;
            if (ratio > 10) foundationHasStockOver10 = true;

            const stockVal = cs * pr;
            totalStockVal += stockVal;
            totalCashVal  += cash;
            if (isAff) affStockVal += stockVal;

            card.querySelector('.comp-guide').innerText = `5%: ${fNum(Math.floor(ts*0.05))} | 10%: ${fNum(Math.floor(ts*0.1))}`;
            card.querySelector('.comp-ratio').innerText = ratio.toFixed(2) + "%";
            card.querySelector('.comp-subtotal').innerHTML =
                `<div class="subtotal-row"><span>주식 출연액:</span><span>${fNum(stockVal)}원</span></div>` +
                `<div class="subtotal-row"><span>현금 출연액:</span><span>+ ${fNum(cash)}원</span></div>` +
                `<div class="subtotal-row" style="border-top:1px dashed var(--border); margin-top:5px; font-weight:bold; color:var(--text-main)"><span>합계:</span><span>= ${fNum(stockVal + cash)}원</span></div>`;

            const excessStockVal = ratio > 10 ? (cs - (ts * 0.1)) * pr : 0;
            const giftTax = calcGiftTax(excessStockVal);
            totalExcessGiftTax += giftTax;

            tableHtml += `<tr>
                <td>${name}</td>
                <td>${ratio.toFixed(2)}%</td>
                <td><span class="badge ${ratio <= 10 ? 'pass' : 'fail'}">${ratio <= 10 ? '적합' : '초과'}</span></td>
                <td><span class="badge" id="assetBadge_${card.id}">-</span></td>
                <td>${fNum(stockVal)}원</td>
                <td class="tax-val">${fNum(giftTax)}원</td>
            </tr>`;
        });

        const totalAsset = totalStockVal + totalCashVal;
        const affRatio   = totalAsset > 0 ? (affStockVal / totalAsset) * 100 : 0;
        document.getElementById('resTotalStock').innerText = fNum(totalStockVal) + "원";
        document.getElementById('resTotalCash').innerText  = fNum(totalCashVal)  + "원";
        document.getElementById('resTotal').innerText      = fNum(totalAsset)    + "원";
        document.getElementById('resAffRatio').innerText   = affRatio.toFixed(2) + "%";
        document.getElementById('barAff').style.width            = Math.min(affRatio, 100) + "%";
        document.getElementById('barAff').style.backgroundColor  = affRatio > 50 ? "var(--danger)" : "var(--primary)";
        document.getElementById('analysisBody').innerHTML = tableHtml;

        // 자산비율 개별 배지 업데이트
        cards.forEach(card => {
            const sv = pNum(card.querySelector('.comp-cs').value) * pNum(card.querySelector('.comp-pr').value);
            const singleRatio = totalAsset > 0 ? (sv / totalAsset) * 100 : 0;
            const b = document.getElementById(`assetBadge_${card.id}`);
            if (b) { b.innerText = singleRatio.toFixed(1) + "%"; b.className = `badge ${singleRatio <= 30 ? 'pass' : 'fail'}`; }
        });

        // 총자산 비율 기준 레이블 생성 헬퍼 (직전연도말 장부가액 반영)
        function makeBaseLbl(bookAsset, over5, over10, yearNote) {
            if (bookAsset < 5e8) return `① 총자산 비율 기준 (장부가 5억 미만 — 해당없음)`;
            if (over10) return `① 총자산 3% 기준 (지분 10% 초과${yearNote})`;
            if (over5)  return `① 총자산 1% 기준 (지분 5% 초과${yearNote})`;
            return `① 총자산 비율 기준 (지분 5% 이하 — 해당없음)`;
        }
        // Y1: 설립 시 총자산 기준
        const el1lbl = document.getElementById('y1_tt_base_lbl');
        if (el1lbl) el1lbl.textContent = makeBaseLbl(totalAsset, foundationHasStockOver5, foundationHasStockOver10, '');

        const budget = pNum(document.getElementById('annualBudget').value);
        const req3   = budget * 3;
        const isStable = totalCashVal >= req3 && totalCashVal > 0;
        document.getElementById('cashStability').style.backgroundColor = isStable
            ? "rgba(16, 185, 129, 0.1)"
            : (totalCashVal > 0 ? "rgba(239, 68, 68, 0.1)" : "rgba(255,255,255,0.05)");
        document.getElementById('cashStability').innerHTML =
            `<div style="font-size:0.9rem">출연현금: <span class="highlight">${fNum(totalCashVal)}원</span> / 3년치예산: <span class="highlight">${fNum(req3)}원</span></div>` +
            `<div style="margin-top:10px; font-weight:bold; color:${isStable ? 'var(--success)' : 'var(--danger)'}">` +
            `${totalCashVal === 0 ? "현금을 입력하세요" : (isStable ? "✓ 운영 안정성 적합" : "⚠ 현금 출연 재검토 필요")}</div>`;

        // ── 3개년 의무이행 시뮬레이터 ─────────────────────────────
        // 총자산 5억 이상인 공익법인에게만 1%/3% 의무사용 기준 적용 (국세청 기준)
        const baseRuleTarget = totalAsset >= 5e8 ? Math.max(
            foundationHasStockOver5  ? totalAsset * 0.01 : 0,
            foundationHasStockOver10 ? totalAsset * 0.03 : 0
        ) : 0;

        let totalTax = totalExcessGiftTax;

        // ── Year 1 ────────────────────────────────────────────────
        const y1Op   = getOpIncome(1, totalStockVal, totalCashVal);
        const y1Sale = pNum(document.getElementById('y1_sale').value);
        const y1Spend = getSpend(1);

        const y1_base = baseRuleTarget;
        const y1_op   = y1Op * 0.8;
        const y1_sale = y1Sale * 0.3;
        let req1 = Math.max(y1_base, y1_op, y1_sale);
        document.getElementById('y1_min_req').innerText = fNum(Math.round(req1)) + "원";
        updateTooltip(1, y1_base, y1_op, y1_sale, req1);

        let sh1 = Math.max(0, req1 - y1Spend);
        // 운용소득이 바인딩 기준인지 판별 (상증법 §48②: 운용소득 미달 시 가산세+증여세 동시 부과)
        const isOpBinding1 = y1_op > 0 && y1_op >= y1_base && y1_op >= y1_sale;
        let tax1_penalty = sh1 > 0 ? sh1 * 0.1 : 0;                           // 가산세 10% (항상)
        let tax1_gift    = (sh1 > 0 && isOpBinding1) ? calcGiftTax(sh1) : 0;  // 증여세 (운용소득 미달 시)
        let tax1 = tax1_penalty + tax1_gift;
        document.getElementById('y1_tax').innerText   = fNum(Math.round(tax1_penalty)) + "원";
        document.getElementById('y1_badge').innerText  = sh1 > 0 ? (isOpBinding1 ? "미달/가산세+증여세" : "미달/가산세") : "적합";
        document.getElementById('y1_badge').className  = sh1 > 0 ? "badge fail" : "badge pass";
        updateTaxTooltip(1, req1, y1Spend, sh1, 0.1, false);
        const y1GiftSec = document.getElementById('y1_op_gift_section');
        if (y1GiftSec) y1GiftSec.style.display = (isOpBinding1 && sh1 > 0) ? '' : 'none';
        updateGiftTaxTooltip(1, isOpBinding1 ? sh1 : 0);
        const w1 = document.getElementById('y1_cash_warning');
        if (w1) w1.style.display = sh1 > 0 ? '' : 'none';
        totalTax += tax1;

        // 1차년도 초과 지출 잉여분 (A-5 버그 수정)
        const y1Surplus = Math.max(0, y1Spend - req1);

        // Y2 직전 사업연도(1년차) 종료일 장부가액 = 초기자산 + 1년차 운용소득 − 1년차 지출
        const y2BookAsset = Math.max(0, totalAsset + y1Op - y1Spend);
        const y2BaseRuleTarget = y2BookAsset >= 5e8 ? Math.max(
            foundationHasStockOver5  ? y2BookAsset * 0.01 : 0,
            foundationHasStockOver10 ? y2BookAsset * 0.03 : 0
        ) : 0;
        const el2lbl = document.getElementById('y2_tt_base_lbl');
        if (el2lbl) el2lbl.textContent = makeBaseLbl(y2BookAsset, foundationHasStockOver5, foundationHasStockOver10, ', 1년차말 장부가액');

        // ── Year 2 ────────────────────────────────────────────────
        const y2Op   = getOpIncome(2, totalStockVal, totalCashVal);
        const y2Sale = pNum(document.getElementById('y2_sale').value);
        const y2Spend = getSpend(2);

        // 매각대금 누계 트랙: 1차 실지출 전액 차감 (30% 상한 제거)
        let sTarget2 = Math.max(0, (y1Sale * 0.6) + (y2Sale * 0.3) - y1Spend);

        const y2_base = y2BaseRuleTarget;
        const y2_op   = y2Op * 0.8;
        // 소득/자산 트랙: 잉여분은 소득/자산 기준에만 적용 (이중 차감 방지)
        const y2_income_base_net = Math.max(0, Math.max(y2_base, y2_op) - y1Surplus);
        // 최종 의무: 두 트랙 중 높은 값
        let req2 = Math.max(y2_income_base_net, sTarget2);
        const req2Raw = Math.max(y2_base, y2_op, sTarget2); // 툴팁 ★ 표시용
        document.getElementById('y2_min_req').innerText = fNum(Math.round(req2)) + "원";
        updateTooltip(2, y2_base, y2_op, sTarget2, req2Raw, undefined, y1Surplus);

        let sh2 = Math.max(0, req2 - y2Spend);
        const isOpBinding2 = y2_op > 0 && y2_op >= y2_base && y2_op >= sTarget2;
        let tax2_penalty = sh2 > 0 ? sh2 * 0.1 : 0;
        let tax2_gift    = (sh2 > 0 && isOpBinding2) ? calcGiftTax(sh2) : 0;
        let tax2 = tax2_penalty + tax2_gift;
        document.getElementById('y2_tax').innerText   = fNum(Math.round(tax2_penalty)) + "원";
        document.getElementById('y2_badge').innerText  = sh2 > 0 ? (isOpBinding2 ? "미달/가산세+증여세" : "미달/가산세") : "적합";
        document.getElementById('y2_badge').className  = sh2 > 0 ? "badge fail" : "badge pass";
        updateTaxTooltip(2, req2, y2Spend, sh2, 0.1, false);
        const y2GiftSec = document.getElementById('y2_op_gift_section');
        if (y2GiftSec) y2GiftSec.style.display = (isOpBinding2 && sh2 > 0) ? '' : 'none';
        updateGiftTaxTooltip(2, isOpBinding2 ? sh2 : 0);
        const w2 = document.getElementById('y2_cash_warning');
        if (w2) w2.style.display = sh2 > 0 ? '' : 'none';
        totalTax += tax2;

        // 2차년도 초과 지출 잉여분
        const y2Surplus = Math.max(0, y2Spend - req2);
        const totalSurplus = y1Surplus + y2Surplus;

        // Y3 직전 사업연도(2년차) 종료일 장부가액 = 초기자산 + 1·2년차 운용소득 − 1·2년차 지출
        const y3BookAsset = Math.max(0, totalAsset + y1Op + y2Op - y1Spend - y2Spend);
        const y3BaseRuleTarget = y3BookAsset >= 5e8 ? Math.max(
            foundationHasStockOver5  ? y3BookAsset * 0.01 : 0,
            foundationHasStockOver10 ? y3BookAsset * 0.03 : 0
        ) : 0;
        const el3lbl = document.getElementById('y3_tt_base_lbl');
        if (el3lbl) el3lbl.textContent = makeBaseLbl(y3BookAsset, foundationHasStockOver5, foundationHasStockOver10, ', 2년차말 장부가액');

        // ── Year 3 ────────────────────────────────────────────────
        const y3Op   = getOpIncome(3, totalStockVal, totalCashVal);
        const y3Sale = pNum(document.getElementById('y3_sale').value);
        const y3Spend = getSpend(3);

        // 매각대금 누계 트랙: 1~2차 실지출 전액 차감 (상한 제거)
        let sTarget3 = Math.max(0,
            (y1Sale * 0.9) + (y2Sale * 0.6) + (y3Sale * 0.3)
            - y1Spend - y2Spend
        );
        let cashTarget3 = Math.max(0, totalCashVal - y1Spend - y2Spend);

        const y3_base = y3BaseRuleTarget;
        const y3_op   = y3Op * 0.8;
        // 소득/자산 트랙: 누적 잉여분을 소득/자산 기준에만 적용
        const y3_income_base_net = Math.max(0, Math.max(y3_base, y3_op) - totalSurplus);
        // 최종 의무: 모든 트랙 중 최대값
        let req3_yr = Math.max(y3_income_base_net, sTarget3, cashTarget3);
        const req3Raw = Math.max(y3_base, y3_op, sTarget3, cashTarget3); // 툴팁 ★ 표시용
        document.getElementById('y3_min_req').innerText = fNum(Math.round(req3_yr)) + "원";
        updateTooltip(3, y3_base, y3_op, sTarget3, req3Raw, cashTarget3, totalSurplus);

        let sh3 = Math.max(0, req3_yr - y3Spend);
        // 바인딩 기준 판별 (우선순위: 현금 > 매각대금 > 운용소득 > 총자산)
        const isCashTax3    = cashTarget3 > 0 && req3Raw === cashTarget3;
        const isSaleFinal3  = !isCashTax3 && sTarget3 > 0 && req3Raw === sTarget3;
        const isOpBinding3  = !isCashTax3 && !isSaleFinal3 && y3_op > 0 && y3_op >= y3_base;
        let tax3_penalty = 0, tax3_gift = 0, tax3 = 0;
        if (sh3 > 0) {
            if (isCashTax3 || isSaleFinal3) {
                // 현금 3년 미사용 OR 매각대금 90% 최종 미달 → 증여세만
                tax3_gift = calcGiftTax(sh3);
                tax3 = tax3_gift;
            } else {
                // 총자산비율 or 운용소득 → 가산세 10%
                tax3_penalty = sh3 * 0.1;
                // 운용소득 미달 시 증여세 추가 동시 부과
                tax3_gift = isOpBinding3 ? calcGiftTax(sh3) : 0;
                tax3 = tax3_penalty + tax3_gift;
            }
        }
        const y3BadgeText = sh3 > 0
            ? (isCashTax3 || isSaleFinal3 ? "미달/증여세"
               : isOpBinding3 ? "미달/가산세+증여세" : "미달/가산세")
            : "적합";
        document.getElementById('y3_tax').innerText   = fNum(Math.round(isCashTax3 || isSaleFinal3 ? tax3_gift : tax3_penalty)) + "원";
        document.getElementById('y3_badge').innerText  = y3BadgeText;
        document.getElementById('y3_badge').className  = sh3 > 0 ? "badge fail" : "badge pass";
        updateTaxTooltip(3, req3_yr, y3Spend, sh3, 0.1, isCashTax3 || isSaleFinal3);
        const y3GiftSec = document.getElementById('y3_gift_section');
        if (y3GiftSec) y3GiftSec.style.display = (isOpBinding3 && sh3 > 0) ? '' : 'none';
        updateGiftTaxTooltip(3, isOpBinding3 ? sh3 : 0);
        totalTax += tax3;

        document.getElementById('resTotalTax').innerText = fNum(Math.round(totalTax)) + "원";
    }

    function saveCurrent() {
        const slot = document.getElementById('saveSlot').value;
        const mode = document.querySelector('input[name="incomeMode"]:checked');
        const data = {
            incomeMode: mode ? mode.value : 'direct',
            companies: Array.from(document.querySelectorAll('.company-card')).map(card => ({
                name:  card.querySelector('.comp-name').value,
                ts:    card.querySelector('.comp-ts').value,
                cs:    card.querySelector('.comp-cs').value,
                pr:    card.querySelector('.comp-pr').value,
                cash:  card.querySelector('.comp-cash').value,
                isAff: card.querySelector('.comp-aff').checked
            })),
            others: {
                annualBudget:   document.getElementById('annualBudget').value,
                y1_op:          document.getElementById('y1_op').value,
                y1_sale:        document.getElementById('y1_sale').value,
                y1_spend_pure:  document.getElementById('y1_spend_pure').value,
                y1_spend_invest:document.getElementById('y1_spend_invest').value,
                y1_rate_stock:  document.getElementById('y1_rate_stock').value,
                y1_rate_cash:   document.getElementById('y1_rate_cash').value,
                y2_op:          document.getElementById('y2_op').value,
                y2_sale:        document.getElementById('y2_sale').value,
                y2_spend_pure:  document.getElementById('y2_spend_pure').value,
                y2_spend_invest:document.getElementById('y2_spend_invest').value,
                y2_rate_stock:  document.getElementById('y2_rate_stock').value,
                y2_rate_cash:   document.getElementById('y2_rate_cash').value,
                y3_op:          document.getElementById('y3_op').value,
                y3_sale:        document.getElementById('y3_sale').value,
                y3_spend_pure:  document.getElementById('y3_spend_pure').value,
                y3_spend_invest:document.getElementById('y3_spend_invest').value,
                y3_rate_stock:  document.getElementById('y3_rate_stock').value,
                y3_rate_cash:   document.getElementById('y3_rate_cash').value,
            },
            checks: Array.from(document.querySelectorAll('input[type="checkbox"]:not(.comp-aff)')).map(c => ({ id: c.id, checked: c.checked }))
        };
        localStorage.setItem('tax_scen_dyn_' + slot, JSON.stringify(data));
        alert('시나리오 ' + slot + '번에 저장했습니다.');
        updateButtonStatus();
    }

    function loadScenario(slot) {
        const saved = localStorage.getItem('tax_scen_dyn_' + slot);
        if (!saved) { alert('저장된 데이터가 없습니다.'); return; }
        const data = JSON.parse(saved);
        document.getElementById('companyContainer').innerHTML = '';
        compIdCounter = 0;
        data.companies.forEach(c => createCompanyCard(null, c));

        // 입력 모드 복원
        if (data.incomeMode) {
            const radio = document.querySelector(`input[name="incomeMode"][value="${data.incomeMode}"]`);
            if (radio) radio.checked = true;
        }

        for (let key in data.others) {
            const el = document.getElementById(key);
            if (el) el.value = data.others[key];
        }
        if (data.checks) data.checks.forEach(c => { if (document.getElementById(c.id)) document.getElementById(c.id).checked = c.checked; });
        alert('시나리오 ' + slot + '번을 불러왔습니다.');
        update();
    }

    function updateButtonStatus() {
        for (let i = 1; i <= 5; i++) {
            const btn   = document.getElementById('btn_sc' + i);
            const saved = localStorage.getItem('tax_scen_dyn_' + i);
            btn.style.color = saved ? 'var(--primary)' : 'var(--text-sub)';
            btn.innerText   = saved ? `시나리오 ${i} (저장됨)` : `시나리오 ${i}`;
        }
    }

    function clearAllData() {
        if (confirm('모든 저장 시나리오를 영구 삭제하시겠습니까?')) {
            localStorage.clear();
            location.reload();
        }
    }

    function initSimulation() { addNewCompany(); updateButtonStatus(); }

document.addEventListener("DOMContentLoaded", function() {
    initSimulation();
});
