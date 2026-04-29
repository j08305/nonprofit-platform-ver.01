// 14개 필수 구비서류 데이터 세트
        const docData = [
          {
            id: 1, title: '법인설립허가신청서', size: '120KB', desc: '주무관청 제출용 공식 신청서 서식', law: '민법 제32조', alert: '발기인 대표자의 서명 및 날인 필수',
            simhwa: `<div class="doc-detail-guide" style="margin-top: 12px; padding: 12px 14px; background: rgba(212,168,83,0.06); border-left: 3px solid var(--accent-gold); border-radius: 4px; font-size: 13px; line-height: 1.6;">
        <span style="color: var(--accent-gold); font-weight: 700;">⭐ 상세 실무 가이드</span>
        <ul style="margin: 6px 0 0 16px; padding: 0;">
          <li><strong>"신청인란"</strong>: 설립하고자 하는 법인의 대표자나 실무책임자(사무총장 등)를 기재하며, 서명은 사인이나 날인 모두 가능</li>
          <li><strong>"법인란"</strong>: 설립하고자 하는 법인의 명칭과 소재지 등을 기재</li>
          <li><strong>"소재지"</strong>: 건물명, 호수 등을 구체적으로 기록(도로명 주소)하되, 향후 설립등기를 감안하여 정관에 기재된 사무소 소재지와 완벽히 일치시켜야 함</li>
          <li><strong>"대표자"</strong>: 창립총회(또는 발기인 총회)에서 최종 선임된 대표자의 인적사항을 정확히 기재</li>
        </ul>
      </div>`
          },
          { id: 2, title: '설립취지서', size: '240KB', desc: '비영리법인 설립 목적과 사회적 배경 명시', law: '해당사항 없음', alert: '주무관청의 공익/목적 부합성 심사 기준' },
          {
            id: 3, title: '설립발기인 인적사항', size: '85KB', desc: '발기인 전원의 이름, 주소, 연락처 등 기재', law: '해당사항 없음', alert: '발기인은 최소 3인 이상으로 구성',
            simhwa: `<div class="doc-detail-guide" style="margin-top: 12px; padding: 12px 14px; background: rgba(212,168,83,0.06); border-left: 3px solid var(--accent-gold); border-radius: 4px; font-size: 13px; line-height: 1.6;">
        <span style="color: var(--accent-gold); font-weight: 700;">⭐ 상세 실무 가이드</span>
        <ul style="margin: 6px 0 0 16px; padding: 0;">
          <li>설립발기인의 <strong>성명, 생년월일, 주소와 약력</strong> 등을 빠짐없이 기재</li>
          <li>발기인이 <strong>법인</strong>인 경우: 기존법인의 명칭, 주된 사무소의 소재지, 대표자의 성명/생년월일/주소 및 정관 제출</li>
          <li>발기인이 <strong>외국인</strong>인 경우: 생년월일 대신 외국인등록번호를 기재</li>
          <li><strong>약력</strong>: 가급적 법인의 목적사업과 관련된 이력을 중심으로 3~4개 정도 적고, 전/현직 여부 명확히 표시</li>
        </ul>
      </div>`
          },
          {
            id: 4, title: '임원이력서', size: '110KB', desc: '취임 예정 임원(이사, 감사)의 주요 학력 및 경력', law: '해당사항 없음', alert: '임원 결격사유 조회를 위해 상세히 작성',
            simhwa: `<div class="doc-detail-guide" style="margin-top: 12px; padding: 12px 14px; background: rgba(212,168,83,0.06); border-left: 3px solid var(--accent-gold); border-radius: 4px; font-size: 13px; line-height: 1.6;">
        <span style="color: var(--accent-gold); font-weight: 700;">⭐ 상세 실무 가이드</span>
        <ul style="margin: 6px 0 0 16px; padding: 0;">
          <li>취임 예정자 명단에는 이사 및 감사 등의 직위와 취임기간을 명시하고 반드시 날인</li>
          <li>성명, 주소, 약력 등 핵심 인적사항을 누락 없이 기재</li>
        </ul>
      </div>`
          },
          {
            id: 5, title: '임원취임승낙서', size: '320KB', desc: '임원 전원의 법인 취임 동의 서면', law: '민법 제57조', alert: '임원 전원의 인감 날인 및 인감증명서 첨부 필수',
            simhwa: `<div class="doc-detail-guide" style="margin-top: 12px; padding: 12px 14px; background: rgba(212,168,83,0.06); border-left: 3px solid var(--accent-gold); border-radius: 4px; font-size: 13px; line-height: 1.6;">
        <span style="color: var(--accent-gold); font-weight: 700;">⭐ 상세 실무 가이드</span>
        <ul style="margin: 6px 0 0 16px; padding: 0;">
          <li>취임승낙서는 취임 예정 직위를 명확히 명시한 후 본인이 직접 기명 및 인감 날인</li>
        </ul>
      </div>`
          },
          {
            id: 6, title: '창립총회회의록', size: '540KB', desc: '법인 설립 및 정관 채택, 임원 선출 논의록', law: '해당사항 없음', alert: '발기인 전원의 기명 날인(간인 포함) 및 개최 사진 첨부',
            simhwa: `<div class="doc-detail-guide" style="margin-top: 12px; padding: 12px 14px; background: rgba(212,168,83,0.06); border-left: 3px solid var(--accent-gold); border-radius: 4px; font-size: 13px; line-height: 1.6;">
        <span style="color: var(--accent-gold); font-weight: 700;">⭐ 상세 실무 가이드</span>
        <ul style="margin: 6px 0 0 16px; padding: 0;">
          <li><strong>필수 포함(육하원칙)</strong>: 회의일시/장소, 참석대상 및 인원, 의결권 위임여부, 회의안건, 진행자</li>
          <li><strong>결의 사항</strong>: 설립취지, 정관 심의/의결, 임원 선출, 재산출연/수증 의결, 사업계획 및 수지예산 의결</li>
          <li><strong>진행 기록</strong>: 정관 심의과정, 임원선출 표결사항, 찬반 토론내용을 최대한 상세히 작성</li>
          <li><strong>날인 규정</strong>: 발기인 전원이 회의록 각 장마다 <strong>인감 간인</strong>하고, 마지막 장에 전원 성명 기재 후 <strong>인감 날인</strong></li>
        </ul>
      </div>`
          },
          {
            id: 7, title: '정관', size: '150KB', desc: '법인의 목적과 조직에 관한 최상위 규범', law: '민법 제40조', alert: '주무관청 표준 정관 준칙을 엄격하게 준용할 것',
            simhwa: `<div class="doc-detail-guide" style="margin-top: 12px; padding: 12px 14px; background: rgba(212,168,83,0.06); border-left: 3px solid var(--accent-gold); border-radius: 4px; font-size: 13px; line-height: 1.6; letter-spacing: -0.3px;">
        <span style="color: var(--accent-gold); font-weight: 700;">⭐ 상세 실무 가이드 (정관 핵심 기재사항)</span>
        <ul style="margin: 6px 0 0 16px; padding: 0;">
          <li><strong>사단법인</strong>: 정관(민법 제40조)에 ① 목적, ② 명칭, ③ 사무소의 소재지, ④ 자산에 관한 규정, ⑤ 이사의 임면에 관한 규정, ⑥ 회원자격의 득실 규정, ⑦ 존립시기/해산사유 필수 기재</li>
          <li><strong>재단법인</strong>: 설립취지가 존중되도록 목적/명칭/재산 규정에 <strong>설립자가 기명날인</strong></li>
          <li><strong>확정절차</strong>: 사단(설립자 작성/간인→창립총회 확정) / 재단(재산출연자 작성/간인→창립이사회 확정)</li>
        </ul>
        <div style="margin-top:8px; display:grid; grid-template-columns: 100%; gap: 6px;">
          <div style="background:#fff; padding:6px 10px; border:1px solid rgba(212,168,83,0.3); border-radius:4px;"><strong style="color:var(--text-primary);">목적:</strong> 추상적 내용 지양, 구체적/실현가능한 사업 설정</div>
          <div style="background:#fff; padding:6px 10px; border:1px solid rgba(212,168,83,0.3); border-radius:4px;"><strong style="color:var(--text-primary);">명칭:</strong> 기존 법인 중복 불가 (앞에 ｢사단법인｣, ｢재단법인｣ 문구 사용)</div>
          <div style="background:#fff; padding:6px 10px; border:1px solid rgba(212,168,83,0.3); border-radius:4px;"><strong style="color:var(--text-primary);">소재지:</strong> 확정 주된사무소 기준. 주소의 최소단위(길, 호)까지 모두 명시</div>
          <div style="background:#fff; padding:6px 10px; border:1px solid rgba(212,168,83,0.3); border-radius:4px;"><strong style="color:var(--text-primary);">자산:</strong> 주무관청과 제3자에게 견실한 재정 기초를 입증할 수준</div>
          <div style="background:#fff; padding:6px 10px; border:1px solid rgba(212,168,83,0.3); border-radius:4px;"><strong style="color:var(--text-primary);">이사 임면:</strong> '0명~0명 이내' 유연 규정 허용, 총회 선임 원칙 (사원 아닌 자도 가능)</div>
          <div style="background:#fff; padding:6px 10px; border:1px solid rgba(212,168,83,0.3); border-radius:4px;"><strong style="color:var(--text-primary);">사원자격/해산:</strong> 입사·퇴사·제명 명시, 존립시기는 정한 때만 기재</div>
        </div>
      </div>`
          },
          { id: 8, title: '법인조직 및 상근임직원 정수표', size: '100KB', desc: '법인 내 구체적 조직도 및 상근 임직원 TO', law: '해당사항 없음', alert: '예산서 내 인건비와 부합하도록 작성' },
          { id: 9, title: '재산출연증서/잔고증명서', size: '210KB', desc: '출연자의 재산 출연 확약서 및 실제 통장 잔고 증명', law: '해당사항 없음', alert: '금융기관 발급본 및 출연자의 인감 날인 필수' },
          {
            id: 10, title: '재산목록', size: '480KB', desc: '본 법인에 출연된 기본재산과 보통재산 분류, 총계록', law: '민법 제32조', alert: '증명서와 재산목록의 금액이 1원 단위까지 일치해야 함',
            simhwa: `<div class="doc-detail-guide" style="margin-top: 12px; padding: 12px 14px; background: rgba(212,168,83,0.06); border-left: 3px solid var(--accent-gold); border-radius: 4px; font-size: 13px; line-height: 1.6;">
        <span style="color: var(--accent-gold); font-weight: 700;">⭐ 상세 실무 가이드</span>
        <ul style="margin: 6px 0 0 16px; padding: 0;">
          <li>재산목록은 <strong>기본재산과 운영재산</strong>으로 명확히 구분 (사단법인도 구분 권장)</li>
          <li>금융기관 예치금은 <strong>증명서류 원본</strong> 제출 필수</li>
          <li>재산원 출연 판단: <strong>출연 의사 증빙서 + 재산목록 + 인감증명서 + 공증</strong> 일괄 제출</li>
          <li>수익발생형 기본재산: <strong>수익확인서, 배당이익증명서, 이자수익확인서, 납세필증</strong> 등 공신력 있는 기관의 증빙서류 첨부 및 수익산출 근거 명시</li>
        </ul>
      </div>`
          },
          { id: 11, title: '재산증명서', size: '600KB', desc: '재산 귀속을 증명하는 평가서 또는 등기부등본', law: '해당사항 없음', alert: '부동산일 경우 소유권 이전 확약 서류 포함' },
          { id: 12, title: '회원명부(해당없음)', size: '350KB', desc: '사단법인일 경우 창립 회원의 명단 및 서명', law: '사단법인 한정', alert: '주무관청별 최소 필요 회원수 확인 엄수' },
          {
            id: 13, title: '사업계획서/수지예산서', size: '190KB', desc: '목적 사업에 관한 단기/중기 세부 계획 및 예산 현황', law: '해당사항 없음', alert: '총 수입과 총 지출 예산이 반드시 동일하게 맞아떨어질 것',
            simhwa: `<div class="doc-detail-guide" style="margin-top: 12px; padding: 12px 14px; background: rgba(212,168,83,0.06); border-left: 3px solid var(--accent-gold); border-radius: 4px; font-size: 13px; line-height: 1.6;">
        <span style="color: var(--accent-gold); font-weight: 700;">⭐ 상세 실무 가이드</span>
        <ul style="margin: 6px 0 0 16px; padding: 0;">
          <li>설립목적과 정관에 기초하여 목적사업 내용을 판단할 수 있도록 <strong>당해 연도분의 사업계획서 및 수지예산서</strong> 제출</li>
          <li>신청 시기가 하반기인 경우 <strong>익년도 서류</strong>까지 함께 제출해야 함</li>
          <li>사업 목적 범위 내에서 현신적으로 실현가능한 사업을 구체적으로 기재하며, <strong>사업계획 수치와 예산내역서 수치가 상호 연계</strong>되도록 검증 작성</li>
        </ul>
      </div>`
          },
          { id: 14, title: '사무실 확보 증명서', size: '95KB', desc: '부동산 임대차계약서 또는 무상사용승낙서', law: '해당사항 없음', alert: '과도한 보증금 지출 시 기본재산 비율 주의' }
        ];

        let currentDocIndex = 0;
        let uploadStatus = new Array(14).fill(null);

        function renderTabs() {
          const tabsContainer = document.getElementById('docTabs');
          const miniDots = document.getElementById('miniDots');
          if (tabsContainer) tabsContainer.innerHTML = '';
          if (miniDots) miniDots.innerHTML = '';
          docData.forEach((doc, idx) => {
            const tab = document.createElement('div');
            tab.className = 'doc-tab' + (idx === currentDocIndex ? ' active' : '') + (uploadStatus[idx] ? ' uploaded' : '');
            tab.innerHTML = `<span class="tab-num">${idx + 1}</span> ${doc.title}<span class="tab-status"></span>`;
            tab.onclick = () => switchDoc(idx);
            if (tabsContainer) tabsContainer.appendChild(tab);
            const dot = document.createElement('div');
            dot.className = 'mini-dot' + (idx === currentDocIndex ? ' active' : '') + (uploadStatus[idx] ? ' uploaded' : '');
            if (miniDots) miniDots.appendChild(dot);
          });
        }

        function renderPanel() {
          const contentBox = document.getElementById('docContent');
          if (!contentBox) return;
          const doc = docData[currentDocIndex];
          const fileInfo = uploadStatus[currentDocIndex];
          let html = `
      <div class="doc-panel active">
        <div class="doc-panel-header">
          <div class="doc-panel-title-area">
            <div class="doc-panel-num">DOCUMENT ${(currentDocIndex + 1).toString().padStart(2, '0')}</div>
            <div class="doc-panel-title">${doc.title}</div>
            <div class="doc-panel-subtitle">${doc.desc}</div>
          </div>
          <div class="doc-status-badge ${fileInfo ? 'uploaded-badge' : 'pending'}">${fileInfo ? '업로드 완료' : '업로드 대기'}</div>
        </div>
      `;
          if (fileInfo) {
            html += `
        <div class="file-uploaded">
          <div class="file-icon-area">📄</div>
          <div class="file-info">
            <div class="file-name">${fileInfo.name}</div>
            <div class="file-meta">${(fileInfo.size / 1024).toFixed(1)} KB • ${new Date().toLocaleTimeString()}</div>
          </div>
          <div class="file-actions">
            <button class="file-action-btn view-btn" onclick="togglePreview('${fileInfo.url}')">👁️ 미리보기</button>
            <button class="file-action-btn validation-btn" onclick="simulateValidation('${fileInfo.name}', ${currentDocIndex})">검증 결과</button>
            <button class="file-action-btn" onclick="removeFile()">삭제</button>
          </div>
        </div>
        <div id="previewWrap" class="inline-preview-wrap">
          <div class="inline-preview-header">
             <div class="inline-preview-title">다이렉트 문서 뷰어 (${fileInfo.name})</div>
             <div class="inline-preview-close" onclick="closePreview()">✖ 닫기</div>
          </div>
          <iframe id="previewFrame" style="width:100%; height:440px; border:none; display:block;"></iframe>
        </div>
        `;
          } else {
            html += `
        <div class="upload-zone" onclick="document.getElementById('fileInput').click()">
          <span class="upload-icon">📁</span>
          <div class="upload-text-main">클릭하거나 파일을 이곳으로 드래그하세요</div>
          <div class="upload-text-sub">지원 형식: PDF, JPG, PNG 등 (미리보기를 위해 가급적 PDF 권장)</div>
          <div class="upload-btn">문서 첨부하기</div>
        </div>
        `;
          }
          html += `
        <div class="doc-info-box">
          <div class="doc-info-title">기본 서류 제출 요건</div>
          <ul class="doc-info-list" style="margin-bottom:0;">
            <li><strong>근거 법령:</strong> ${doc.law}</li>
            <li><strong>핵심 요약:</strong> ${doc.desc}</li>
            <li><strong style="color:var(--accent-red);">⚠️ 주의사항:</strong> ${doc.alert}</li>
          </ul>
          ${doc.simhwa ? doc.simhwa : ''}
        </div>
      </div>
      `;
          contentBox.innerHTML = html;
        }

        function updateProgress() {
          const uploadedCount = uploadStatus.filter(x => x !== null).length;
          let pct = Math.floor((uploadedCount / 14) * 100);
          const uCountEl = document.getElementById('uploadCount');
          if (uCountEl) uCountEl.innerText = uploadedCount;
          const footerProg = document.getElementById('footerProgress');
          if (footerProg) footerProg.innerText = `${uploadedCount}/14`;
          const pFill = document.querySelector('.progress-fill');
          if (pFill) pFill.style.width = pct + '%';
          const pText = document.querySelector('.progress-bar-pct');
          if (pText) pText.innerText = pct + '%';
          const pLabel = document.querySelector('.progress-label span');
          if (pLabel) pLabel.innerText = pct + '%';
          const sGreen = document.querySelector('.stat-value.green');
          if (sGreen) sGreen.innerText = uploadedCount;
          const sBlue = document.querySelector('.stat-value.blue');
          if (sBlue) sBlue.innerText = 14 - uploadedCount;
          // Sync procedure checklist with upload status
          updateProcedureChecklist();
        }

        function switchDoc(idx) {
          currentDocIndex = idx;
          renderTabs(); renderPanel();
          const tabs = document.querySelectorAll('.doc-tab');
          if (tabs[idx]) tabs[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }

        function togglePreview(url) {
          const wrap = document.getElementById('previewWrap');
          const iframe = document.getElementById('previewFrame');
          if (!wrap || !iframe) return;
          if (wrap.classList.contains('open')) { closePreview(); } else { iframe.src = url; wrap.classList.add('open'); }
        }

        function closePreview() {
          const wrap = document.getElementById('previewWrap');
          const iframe = document.getElementById('previewFrame');
          if (wrap) wrap.classList.remove('open');
          if (iframe) iframe.src = '';
        }

        const DB_NAME = 'DocStorage';
        const STORE_NAME = 'files';
        function initDB() {
          return new Promise((resolve, reject) => {
            const request = indexedDB.open(DB_NAME, 1);
            request.onupgradeneeded = (e) => {
              const db = e.target.result;
              if (!db.objectStoreNames.contains(STORE_NAME)) { db.createObjectStore(STORE_NAME); }
            };
            request.onsuccess = (e) => resolve(e.target.result);
            request.onerror = (e) => reject(e.target.error);
          });
        }

        async function saveFileToDB(idx, file) { const db = await initDB(); const tx = db.transaction(STORE_NAME, 'readwrite'); tx.objectStore(STORE_NAME).put(file, idx); }
        async function deleteFileFromDB(idx) { const db = await initDB(); const tx = db.transaction(STORE_NAME, 'readwrite'); tx.objectStore(STORE_NAME).delete(idx); }
        async function loadFilesFromDB() {
          try {
            const db = await initDB();
            const tx = db.transaction(STORE_NAME, 'readonly');
            const store = tx.objectStore(STORE_NAME);
            const request = store.openCursor();
            request.onsuccess = (e) => {
              const cursor = e.target.result;
              if (cursor) {
                const file = cursor.value;
                const idx = cursor.key;
                uploadStatus[idx] = { name: file.name, size: file.size, url: URL.createObjectURL(file) };
                cursor.continue();
              } else { renderTabs(); renderPanel(); updateProgress(); }
            };
          } catch (err) { console.error("파일 복구 실패:", err); }
        }

        function handleFileSelect(e) {
          if (!e.target.files || e.target.files.length === 0) return;
          const file = e.target.files[0];
          const url = URL.createObjectURL(file);
          uploadStatus[currentDocIndex] = { name: file.name, size: file.size, url: url };
          saveFileToDB(currentDocIndex, file);
          e.target.value = '';
          renderTabs(); renderPanel(); updateProgress();
          // Trigger validation simulation after upload
          simulateValidation(file.name, currentDocIndex);
          setTimeout(() => {
            let nextIdx = uploadStatus.findIndex(x => x === null);
            if (nextIdx !== -1 && nextIdx !== currentDocIndex) { switchDoc(nextIdx); }
          }, 2500);
        }

        function removeFile() {
          if (uploadStatus[currentDocIndex]) {
            URL.revokeObjectURL(uploadStatus[currentDocIndex].url);
            uploadStatus[currentDocIndex] = null;
            deleteFileFromDB(currentDocIndex);
            renderTabs(); renderPanel(); updateProgress();
          }
        }

        function navigate(dir) {
          const newIdx = currentDocIndex + dir;
          if (newIdx >= 0 && newIdx < docData.length) {
            switchDoc(newIdx);
          }
        }

        function show(id, btn) {
          document.querySelectorAll('.pane, .doc-panel').forEach(p => p.classList.remove('active', 'on'));
          document.querySelectorAll('.tab, .doc-tab').forEach(t => t.classList.remove('active', 'on'));
          var p = document.getElementById(id);
          if (p) p.classList.add('active', 'on');
          if (btn) btn.classList.add('active', 'on');
        }

        function toggleChecklist(id) {
          const wrap = document.getElementById(id);
          if (wrap) {
            if (wrap.style.display === 'none') {
              wrap.style.display = 'block';
            } else {
              wrap.style.display = 'none';
            }
          }
        }

        function switchLeftTab(tabEl, paneId) {
          document.querySelectorAll('.left-tab').forEach(t => t.classList.remove('active'));
          document.querySelectorAll('.left-content .panel').forEach(p => p.classList.remove('active'));
          tabEl.classList.add('active');
          const target = document.getElementById('panel-' + paneId);
          if (target) { target.classList.add('active'); }
        }

        function switchMonitorTab(tabId, tabEl) {
          document.querySelectorAll('.system-tab').forEach(t => t.classList.remove('active'));
          tabEl.classList.add('active');
          document.querySelectorAll('.monitor-panel').forEach(p => p.classList.remove('active'));
          const target = document.getElementById('monitor-' + tabId);
          if (target) { target.classList.add('active'); }
        }

        function switchSchedulePlan(planId) {
          document.querySelectorAll('.schedule-plan-content').forEach(p => p.classList.remove('active'));
          document.querySelectorAll('.plan-tab').forEach(t => t.classList.remove('active'));
          const targetPlan = document.getElementById('schedule-plan-' + planId);
          if (targetPlan) targetPlan.classList.add('active');
          const tabs = document.querySelectorAll('.plan-tab');
          tabs.forEach(tab => { if (tab.getAttribute('onclick').includes(planId)) { tab.classList.add('active'); } });
        }

        function updateSysTime() {
          const now = new Date();
          const timeStr = now.toLocaleTimeString('ko-KR', { hour12: false, hour: '2-digit', minute: '2-digit' });
          const dateStr = now.toLocaleDateString('ko-KR', { month: 'numeric', day: 'numeric', weekday: 'short' });
          const sysTimeEl = document.getElementById('sysTime');
          if (sysTimeEl) sysTimeEl.innerText = `${dateStr} ${timeStr}`;
        }

        // ══════════════════════════════════════════════════
        //  FEATURE 1: Document Validation Simulation
        // ══════════════════════════════════════════════════

        // Validation rules per docData index (0-based)
        // Each rule has: checkItems array with { label, status: 'pass'|'warn'|'fail', comment }
        const validationRules = {
          0: { // 법인설립허가신청서
            title: '법인설립허가신청서 서식 검증',
            checkItems: [
              { label: '신청인란 기재 여부', status: 'pass', comment: '신청인 성명, 생년월일, 주소가 기재되어 있습니다.' },
              { label: '법인란(명칭/소재지) 기재 여부', status: 'warn', comment: '소재지 항목에 도로명 주소가 누락되어 있습니다. 정관에 기재된 사무소 소재지와 일치하도록 도로명 주소(건물명, 호수)를 기재해 주세요.' },
              { label: '대표자 서명 또는 날인', status: 'pass', comment: '발기인 대표자의 서명이 확인되었습니다.' },
              { label: '처리기간(20일) 안내 확인', status: 'pass', comment: '접수번호·처리기간란이 정상입니다.' }
            ]
          },
          1: { // 설립취지서
            title: '설립취지서 검증',
            checkItems: [
              { label: '설립 목적 명시 여부', status: 'pass', comment: '비영리법인 설립의 필요성과 사업 목적이 기재되어 있습니다.' },
              { label: '공익성/비영리성 표현 적절성', status: 'pass', comment: '영리 아닌 사업의 사회적 기여를 기술하고 있습니다.' },
              { label: '주무관청 목적 부합 여부', status: 'warn', comment: '국토교통부 소관인 "건설기술/스마트건설" 관련 목적과의 연관성을 보다 명확하게 기술해 주세요.' }
            ]
          },
          2: { // 설립발기인 인적사항
            title: '설립발기인 인적사항 검증',
            checkItems: [
              { label: '성명/생년월일/주소 기재 여부', status: 'pass', comment: '발기인 인적 정보가 기재되어 있습니다.' },
              { label: '약력(3~4개) 기재 여부', status: 'warn', comment: '법인의 목적사업 관련 약력을 중심으로 3~4개 이력을 기재해 주세요. 전·현직 여부도 명확히 표시가 필요합니다.' },
              { label: '발기인이 법인인 경우 정관 첨부', status: 'pass', comment: '해당사항이 없거나, 법인 발기인의 정관이 첨부되어 있습니다.' }
            ]
          },
          3: { // 임원이력서
            title: '임원 취임 예정자 이력서 검증',
            checkItems: [
              { label: '직위/성명/생년월일/주소 기재', status: 'pass', comment: '필수 인적사항이 기재되어 있습니다.' },
              { label: '주요 약력 및 임기 기재', status: 'warn', comment: '임기(기간)가 명확히 기재되어 있는지 확인해 주세요.' },
              { label: '임원 결격사유 해당 여부', status: 'pass', comment: '결격사유 관련 사항은 별도 조회로 확인 가능합니다.' }
            ]
          },
          4: { // 임원취임승낙서
            title: '임원취임승낙서 검증',
            checkItems: [
              { label: '취임 예정 직위 명시', status: 'pass', comment: '이사/감사 직위가 명시되어 있습니다.' },
              { label: '취임기간 명시', status: 'warn', comment: '취임 시작일과 종료일(예: 00.00.00 부터 00.00.00까지)을 명확히 기재해 주세요.' },
              { label: '본인 인감 날인', status: 'fail', comment: '취임승낙서에 날인(또는 서명)이 확인되지 않습니다. 취임 예정자 본인의 인감 날인이 필수입니다.' }
            ]
          },
          5: { // 창립총회 회의록
            title: '창립총회 회의록 검증',
            checkItems: [
              { label: '회의일시/장소 기재', status: 'pass', comment: '회의 일시 및 장소가 정상적으로 기재되어 있습니다.' },
              { label: '안건(10개 의안) 기재 여부', status: 'pass', comment: '의장선출, 설립취지 채택 등 필수 안건이 기재되어 있습니다.' },
              { label: '출석/결석 회원 명시', status: 'pass', comment: '출석 및 결석 회원 명단이 명시되어 있습니다.' },
              { label: '발기인 전원 인감 간인/날인', status: 'fail', comment: '회의록 각 장마다 발기인의 인감 간인이 필요합니다. 마지막 장에 전원 성명 기재 후 인감 날인을 확인해 주세요.' },
              { label: '총회 사진/참석자 서명부 포함', status: 'warn', comment: '창립총회 개최 사진 및 참석자 서명부를 첨부해 주세요.' }
            ]
          },
          6: { // 정관
            title: '정관 검증',
            checkItems: [
              { label: '필수기재사항(목적/명칭/소재지/자산/이사임면/사원자격/해산사유)', status: 'pass', comment: '민법 제40조에 따른 필수 기재사항이 포함되어 있습니다.' },
              { label: '명칭 중복 여부', status: 'warn', comment: '법원 법인등기 시스템에서 동일/유사 명칭 사전 검색을 완료해 주세요.' },
              { label: '소재지 도로명 주소 명시', status: 'pass', comment: '주된 사무소 소재지가 도로명 기준으로 기재되었습니다.' },
              { label: '설립자 기명날인', status: 'pass', comment: '재단법인 설립자의 기명날인이 확인되었습니다.' },
              { label: '국세청 의무사항 삽입 여부', status: 'warn', comment: '홈페이지 공시 의무, 자기내부거래 금지, 해산시 잔여재산 귀속 등 국세청 필수 조항이 정관에 포함되어 있는지 재확인해 주세요.' }
            ]
          },
          7: { // 법인조직 및 상근임직원 정수표
            title: '법인조직/상근임직원 정수표 검증',
            checkItems: [
              { label: '조직도 포함 여부', status: 'pass', comment: '법인 조직 구성도가 포함되어 있습니다.' },
              { label: '상근임직원 TO 명시', status: 'warn', comment: '예산서 내 인건비와 상근임직원 수가 정합성이 맞는지 재확인해 주세요.' }
            ]
          },
          8: { // 재산출연증서/잔고증명서
            title: '재산출연증서/잔고증명서 검증',
            checkItems: [
              { label: '출연재산 종류/규모/소재지 기재', status: 'pass', comment: '출연 재산 내역이 기재되어 있습니다.' },
              { label: '출연자 인감 날인', status: 'pass', comment: '출연자의 날인이 확인되었습니다.' },
              { label: '인감증명서 첨부', status: 'warn', comment: '인감증명서 원본 첨부 여부를 확인해 주세요.' },
              { label: '은행 잔고증명서 원본', status: 'warn', comment: '금융기관 발급 잔고증명서의 날짜와 금액이 재산목록과 1원 단위까지 일치하는지 확인해 주세요.' }
            ]
          },
          9: { // 재산목록
            title: '재산목록 검증',
            checkItems: [
              { label: '기본재산/운영재산 구분', status: 'pass', comment: '기본재산과 보통(운영)재산이 구분되어 있습니다.' },
              { label: '재산 평가액 기재', status: 'pass', comment: '각 항목의 평가액이 기재되어 있습니다.' },
              { label: '증명서류 금액 일치', status: 'warn', comment: '잔고증명서·재산출연증서 금액과 재산목록 총계가 1원 단위까지 일치하는지 반드시 확인해 주세요.' }
            ]
          },
          10: { // 재산증명서
            title: '재산증명서 검증',
            checkItems: [
              { label: '재산 귀속 증빙 서류', status: 'pass', comment: '재산 평가서 또는 등기부등본이 첨부되어 있습니다.' },
              { label: '부동산 소유권 이전 확약서', status: 'pass', comment: '해당사항이 없거나 확약서가 포함되어 있습니다.' }
            ]
          },
          11: { // 회원명부
            title: '회원명부 검증',
            checkItems: [
              { label: '재단법인 해당 여부', status: 'pass', comment: '재단법인의 경우 회원명부는 해당사항이 없습니다. (사단법인 한정)' }
            ]
          },
          12: { // 사업계획서/수지예산서
            title: '사업계획서/수지예산서 검증',
            checkItems: [
              { label: '당해연도분 사업계획서 포함', status: 'pass', comment: '해당 사업연도의 사업계획서가 포함되어 있습니다.' },
              { label: '하반기 신청시 익년도 포함 여부', status: 'warn', comment: '하반기 신청의 경우, 다음 연도의 사업계획서도 함께 제출해야 합니다.' },
              { label: '사업계획과 예산내역 연계(連繫)', status: 'fail', comment: '사업계획서 내 사업별 소요비용과 수지예산서의 지출 항목이 상호 연계(일치)될 수 있도록 수정 보완이 필요합니다.' },
              { label: '수입 총계 = 지출 총계 일치', status: 'warn', comment: '총 수입과 총 지출이 정확히 일치해야 합니다. 현재 금액을 대조 확인해 주세요.' },
              { label: '목적사업의 구체성/실현가능성', status: 'pass', comment: '사업 목적 범위 내에서 구체적으로 기재되어 있습니다.' }
            ]
          },
          13: { // 사무실 확보 증명서
            title: '사무실 확보 증명서 검증',
            checkItems: [
              { label: '임대차계약서 또는 무상사용승낙서', status: 'pass', comment: '사무실 사용 증빙 서류가 확인되었습니다.' },
              { label: '보증금 대비 기본재산 비율', status: 'warn', comment: '과도한 보증금 지출이 기본재산 비율에 영향을 주지 않도록 확인해 주세요.' }
            ]
          }
        };

        // Stage-to-document mapping for procedure checklist
        // stage1: 재단법인 설립단계 (주무관청 제출 11개 항목)
        // stage2: 공익법인 지정단계 (국세청 제출 7개 항목 - 현재 우측 업로드와 직접 연동되지 않음)
        const stageDocMapping = {
          stage1: [
            { label: '법인설립허가신청서', docIndices: [0] },
            { label: '설립발기인 인적사항', docIndices: [2] },
            { label: '정관 (법인의 기본규범)', docIndices: [6] },
            { label: '재산목록 및 증명서류', docIndices: [8, 9, 10] },
            { label: '사업계획서 및 수지예산서', docIndices: [12] },
            { label: '임원 취임 예정자 인적사항 및 취임승낙서', docIndices: [3, 4] },
            { label: '창립총회(또는 발기인총회) 회의록', docIndices: [5] },
            { label: '설립취지서', docIndices: [1] },
            { label: '법인조직 및 상근임직원 정수표', docIndices: [7] },
            { label: '회원명부 (재단법인은 해당없음)', docIndices: [11] },
            { label: '사무실 확보 증명서', docIndices: [13] }
          ],
          stage2: [
            { label: '공익법인등 추천신청서', docIndices: [], isExternal: true },
            { label: '법인설립허가서', docIndices: [], isExternal: true },
            { label: '정관', docIndices: [6] },
            { label: '결산서 및 사업연도 예산서', docIndices: [], isExternal: true },
            { label: '기부금을 통한 사업계획서', docIndices: [], isExternal: true },
            { label: '공익법인등 의무이행준수 서약서', docIndices: [], isExternal: true },
            { label: '선거운동 사실 여부 확인서', docIndices: [], isExternal: true }
          ]
        };

        // Simulate validation on file upload
        function simulateValidation(fileName, docIdx) {
          const panel = document.getElementById('validationPanel');
          if (!panel) return;

          const rules = validationRules[docIdx];
          if (!rules) return;

          // Show panel with loading state
          panel.classList.add('open');
          panel.innerHTML = `
            <div class="validation-header">
              <div class="validation-title">📋 서식 기준 분석 중...</div>
              <div class="validation-close" onclick="closeValidation()">✖ 닫기</div>
            </div>
            <div class="validation-body">
              <div class="validation-loading">
                <div class="validation-spinner"></div>
                <div class="validation-loading-text">「${docData[docIdx].title}」 서식 규정 대비 검토 중...</div>
              </div>
            </div>
          `;

          // After delay, show results
          setTimeout(() => {
            showValidationResult(rules, fileName, docIdx);
          }, 1500);
        }

        function showValidationResult(rules, fileName, docIdx) {
          const panel = document.getElementById('validationPanel');
          if (!panel) return;

          const passCount = rules.checkItems.filter(i => i.status === 'pass').length;
          const warnCount = rules.checkItems.filter(i => i.status === 'warn').length;
          const failCount = rules.checkItems.filter(i => i.status === 'fail').length;
          const totalCount = rules.checkItems.length;

          let overallStatus = 'pass';
          let overallLabel = '제출 가능';
          let overallIcon = '✅';
          if (failCount > 0) {
            overallStatus = 'fail';
            overallLabel = '보완 필요 (반려 가능)';
            overallIcon = '❌';
          } else if (warnCount > 0) {
            overallStatus = 'warn';
            overallLabel = '조건부 제출 가능 (보완 권장)';
            overallIcon = '⚠️';
          }

          let itemsHtml = rules.checkItems.map(item => `
            <div class="validation-item">
              <div class="validation-item-header">
                <span class="validation-status-icon status-${item.status}">${item.status === 'pass' ? '✅' : item.status === 'warn' ? '⚠️' : '❌'}</span>
                <span class="validation-item-label">${item.label}</span>
                <span class="validation-badge badge-${item.status}">${item.status === 'pass' ? 'PASS' : item.status === 'warn' ? 'WARNING' : 'FAIL'}</span>
              </div>
              <div class="validation-item-comment">${item.comment}</div>
            </div>
          `).join('');

          panel.innerHTML = `
            <div class="validation-header">
              <div class="validation-title">📋 ${rules.title}</div>
              <div class="validation-close" onclick="closeValidation()">✖ 닫기</div>
            </div>
            <div class="validation-body">
              <div class="validation-file-info">
                <span class="validation-file-name">📄 ${fileName}</span>
                <span class="validation-doc-type">${docData[docIdx].title}</span>
              </div>
              <div class="validation-summary summary-${overallStatus}">
                <div class="validation-summary-icon">${overallIcon}</div>
                <div class="validation-summary-text">
                  <div class="validation-summary-label">${overallLabel}</div>
                  <div class="validation-summary-counts">
                    <span class="count-pass">통과 ${passCount}</span>
                    <span class="count-warn">경고 ${warnCount}</span>
                    <span class="count-fail">실패 ${failCount}</span>
                    <span class="count-total">/ 총 ${totalCount}개 항목</span>
                  </div>
                </div>
              </div>
              <div class="validation-items">
                ${itemsHtml}
              </div>
              <div class="validation-note">
                ※ 본 검증은 「국토교통부 비영리법인 서류 서식」 및 「구비서류 관련 자료」의 규정을 기반으로 한 시뮬레이션입니다.
              </div>
            </div>
          `;
        }

        function closeValidation() {
          const panel = document.getElementById('validationPanel');
          if (panel) panel.classList.remove('open');
        }

        // ══════════════════════════════════════════════════
        //  FEATURE 2: Procedure Checklist Sync
        // ══════════════════════════════════════════════════

        function updateProcedureChecklist() {
          // Stage 1 checklist
          const stage1Container = document.getElementById('stage1Checklist');
          if (stage1Container) {
            const items = stageDocMapping.stage1;
            const completedCount = items.filter(item =>
              item.docIndices.every(idx => uploadStatus[idx] !== null)
            ).length;

            let stageHtml = `
              <div class="checklist-progress-bar">
                <div class="checklist-progress-label">
                  <span>설립 서류 준비 현황</span>
                  <span class="checklist-progress-count">${completedCount} / ${items.length}</span>
                </div>
                <div class="checklist-track">
                  <div class="checklist-fill" style="width: ${Math.round((completedCount / items.length) * 100)}%"></div>
                </div>
              </div>
              <div class="checklist-items">
            `;

            items.forEach((item, idx) => {
              const isDone = item.docIndices.every(idx => uploadStatus[idx] !== null);
              stageHtml += `
                <div class="checklist-item ${isDone ? 'done' : ''}">
                  <span class="checklist-icon">${isDone ? '✅' : '⬜'}</span>
                  <span class="checklist-label">${idx + 1}. ${item.label}</span>
                  ${isDone ? '<span class="checklist-done-badge">완료</span>' : '<span class="checklist-pending-badge">미완료</span>'}
                </div>
              `;
            });

            stageHtml += '</div>';
            stage1Container.innerHTML = stageHtml;
          }

          // Stage 2 checklist
          const stage2Container = document.getElementById('stage2Checklist');
          if (stage2Container) {
            const items = stageDocMapping.stage2;
            const completedCount = items.filter(item => {
              if (item.isExternal) return false;
              return item.docIndices.every(idx => uploadStatus[idx] !== null);
            }).length;

            let stageHtml = `
              <div class="checklist-progress-bar">
                <div class="checklist-progress-label">
                  <span>국세청 제출 서류 현황</span>
                  <span class="checklist-progress-count">${completedCount} / ${items.length}</span>
                </div>
                <div class="checklist-track">
                  <div class="checklist-fill stage2-fill" style="width: ${Math.round((completedCount / items.length) * 100)}%"></div>
                </div>
              </div>
              <div class="checklist-items">
            `;

            items.forEach((item, idx) => {
              let isDone = false;
              if (!item.isExternal && item.docIndices.length > 0) {
                isDone = item.docIndices.every(idx => uploadStatus[idx] !== null);
              }
              const isExternal = item.isExternal;
              stageHtml += `
                <div class="checklist-item ${isDone ? 'done' : ''} ${isExternal ? 'external' : ''}">
                  <span class="checklist-icon">${isDone ? '✅' : isExternal ? '📋' : '⬜'}</span>
                  <span class="checklist-label">${idx + 1}. ${item.label}</span>
                  ${isDone ? '<span class="checklist-done-badge">완료</span>' : isExternal ? '<span class="checklist-external-badge">별도 준비</span>' : '<span class="checklist-pending-badge">미완료</span>'}
                </div>
              `;
            });

            stageHtml += '</div>';
            stage2Container.innerHTML = stageHtml;
          }
        }


        window.onload = function () {
          // IndexedDB에서 기존 파일 불러오기
          loadFilesFromDB();

          renderTabs();
          renderPanel();
          updateProgress();
          updateProcedureChecklist();
          updateSysTime();
          setInterval(updateSysTime, 1000);

          const slider = document.querySelector('.doc-tabs-container');
          if (slider) {
            let isDown = false, startX, scrollLeft;
            slider.addEventListener('mousedown', (e) => { isDown = true; slider.style.cursor = 'grabbing'; startX = e.pageX - slider.offsetLeft; scrollLeft = slider.scrollLeft; });
            slider.addEventListener('mouseleave', () => { isDown = false; slider.style.cursor = 'grab'; });
            slider.addEventListener('mouseup', () => { isDown = false; slider.style.cursor = 'grab'; });
            slider.addEventListener('mousemove', (e) => { if (!isDown) return; e.preventDefault(); const x = e.pageX - slider.offsetLeft; const walk = (x - startX) * 2; slider.scrollLeft = scrollLeft - walk; });
            slider.style.cursor = 'grab';
          }

          // 패널 드래그 리사이저 (A-1)
          const divider   = document.querySelector('.monitor-divider');
          const leftMon   = document.querySelector('.left-monitor');
          const dualMon   = document.querySelector('.dual-monitor');
          if (divider && leftMon && dualMon) {
            let dragging = false, startMouseX = 0, startWidth = 0;
            divider.addEventListener('mousedown', (e) => {
              dragging = true;
              startMouseX = e.clientX;
              startWidth  = leftMon.getBoundingClientRect().width;
              divider.classList.add('dragging');
              document.body.style.cursor   = 'col-resize';
              document.body.style.userSelect = 'none';
            });
            document.addEventListener('mousemove', (e) => {
              if (!dragging) return;
              const containerW = dualMon.getBoundingClientRect().width;
              const newW = Math.min(Math.max(startWidth + (e.clientX - startMouseX), 250), containerW * 0.8);
              leftMon.style.flex = 'none';
              leftMon.style.width = newW + 'px';
            });
            document.addEventListener('mouseup', () => {
              if (!dragging) return;
              dragging = false;
              divider.classList.remove('dragging');
              document.body.style.cursor    = '';
              document.body.style.userSelect = '';
            });
          }
        };


// Insight Button Toggle Logic
window.toggleInsight = function(btn) {
    var content = btn.closest('.step-content').querySelector('.insight-content');
    if (content) {
        var isHidden = content.style.display === 'none' || content.style.display === '';
        content.style.display = isHidden ? 'block' : 'none';
        btn.style.opacity = isHidden ? '0.8' : '1';
    }
}

// Phase Detail Toggle Logic (버튼이 phase-header 내에 있는 새 구조)
window.togglePhaseDetail = function(btn) {
    var phase = btn.closest('.roadmap-phase');
    var detailBody = phase.querySelector('.phase-detail-body');
    var arrow = btn.querySelector('.ph-arrow');
    var isHidden = !detailBody || detailBody.style.display === 'none' || detailBody.style.display === '';
    if (detailBody) detailBody.style.display = isHidden ? 'block' : 'none';
    if (arrow) arrow.textContent = isHidden ? '▲' : '▼';
}

