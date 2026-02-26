const questions = [
  {
    id: 1,
    text: "微信对话框里，对面显示了长达半分钟的“正在输入中…”，最后却只发来一个“好”。你的第一反应是？",
    options: [
      { text: "完蛋，他刚才肯定打了一长段话又删了，是不是对我有千万种不满？", type: "A" },
      { text: "这沟通效率太低了，有事不能直接说吗，打乱了我的节奏。", type: "B" },
      { text: "赶紧回个可爱的表情包，缓解一下这莫名的尴尬气氛。", type: "C" },
      { text: "算了不回了，等我有空/心情好了再精雕细琢回复他。", type: "D" }
    ]
  },
  {
    id: 2,
    text: "准备开启一项重要但困难的新任务（比如写核心报告/复习重难点），你此刻的状态通常是？",
    options: [
      { text: "先把大纲在脑子里反复推演，觉得哪哪都不够好，迟迟敲不下第一行字。", type: "B" },
      { text: "机械地搓动手机屏幕，在各个 App 之间盲目切换，手酸了但脑子很空。", type: "D" },
      { text: "本来挺有动力，但周围环境稍微有点吵闹或不对劲，我就完全无法专注。", type: "A" },
      { text: "为了不让别人觉得我效率低，不管三七二十一先胡乱开个头应付一下。", type: "C" }
    ]
  },
  {
    id: 3,
    text: "你好不容易熬到了周末，原本计划“好好放松”，但到了周日晚上的真实写照是？",
    options: [
      { text: "觉得周末一事无成，对自己充满了强烈的恨铁不成钢和羞耻感。", type: "B" },
      { text: "昨天聚餐虽然在笑，但实际上一直紧绷着察言观色，现在只想一个人躲进洞里。", type: "A" },
      { text: "周末又充当了朋友/家人的“全能救火队员/情绪垃圾桶”，比上班还累。", type: "C" },
      { text: "熬夜看了大量且无营养的短视频，大脑像一锅熬干的粥，毫无神清气爽的感觉。", type: "D" }
    ]
  },
  {
    id: 4,
    text: "如果现在要你发微信拒绝一个不太熟的人的不合理请求，你会？",
    options: [
      { text: "拒绝完之后，连续几个小时都在担心“他以后会不会在别人面前说我坏话”。", type: "A" },
      { text: "觉得这是个麻烦，为了逃避这种社交冲突，甚至考虑干脆咬牙答应算了。", type: "C" },
      { text: "编一个天衣无缝、逻辑严密的完美理由，字斟句酌修改 5 分钟才敢点击发送。", type: "B" },
      { text: "直接拖着不回，假装没看见，直到对方再次催问才随便打个哈哈糊弄过去。", type: "D" }
    ]
  },
  {
    id: 5,
    text: "晚上躺在床上准备睡觉，你的“大脑后台”通常在运行什么程序？",
    options: [
      { text: "疯狂重播白天自己或别人说的一句看似无意的话，逐字逐句做阅读理解。", type: "A" },
      { text: "一条接一条弹出的待办事项清单：“明天房租要交了/工作还没搞完”。", type: "B" },
      { text: "脑子里全是白天别人情绪失控或向我倒苦水的画面，甩都甩不掉。", type: "C" },
      { text: "没有具体想法，就是单纯的大脑兴奋，非得刷点刺激的短视频或看剧才能强制关机。", type: "D" }
    ]
  },
  {
    id: 6,
    text: "当你感觉自己“一点电都不剩”的时候，身体最常给你发出的信号是？",
    options: [
      { text: "太阳穴突突跳，或者总是觉得肩颈肌肉非常僵硬紧绷。", type: "B" },
      { text: "想暴烈地吃高碳水/甜食，或者疯狂想下单买些自己完全不需要的小玩意。", type: "D" },
      { text: "感觉有一层厚厚的玻璃罩把自己和世界隔开了，对稍微大一点的声音都觉得刺耳。", type: "A" },
      { text: "总觉得胸口闷闷的，像被谁压住了一样，不自觉叹气的频率直线上升。", type: "C" }
    ]
  },
  {
    id: 7,
    text: "和朋友或同事在一起时，如果气氛突然变得冷场沉默，你会？",
    options: [
      { text: "立刻觉得“是不是我刚才说错话了？大家是不是讨厌我？”，内心巨浪翻滚。", type: "A" },
      { text: "浑身难受，觉得这是我的责任，赶紧绞尽脑汁找各种话题努力暖场。", type: "C" },
      { text: "觉得大家都很无趣，立刻掏出手机开始给自己找点乐子。", type: "D" },
      { text: "在心里暗暗给这次聚会打个低分，觉得大家既没效率又没共同语言。", type: "B" }
    ]
  },
  {
    id: 8,
    text: "看到别人在社交媒体上发布了升职加薪、或者完美假期的九宫格照片，你的第一感受是？",
    options: [
      { text: "立刻开始对比自己，产生强烈的自我怀疑：“我怎么混成这样，我是不是一无是处？”", type: "B" },
      { text: "敏锐地捕捉到对方照片里的一点小瑕疵或者微表情，觉得对方其实也没那么快乐。", type: "A" },
      { text: "机械地疯狂点赞，然后在心里默默屏蔽，不想让这些信息再刺激自己。", type: "D" },
      { text: "出于礼貌赶紧去留言恭喜一波，哪怕自己今天其实过得很丧。", type: "C" }
    ]
  },
  {
    id: 9,
    text: "假设你今天破天荒地有了一整个下午的完全空闲时间（没有任何必须要完成的任务），你会怎么做？",
    options: [
      { text: "开始感到恐慌，觉得自己“不该这么闲”，必须立刻找点有意义/能提升自己的事情填满它。", type: "B" },
      { text: "终于可以屏蔽所有人！手机静音，谁也不理，只想在一个完全安静、没有刺激的环境里长出蘑菇。", type: "A" },
      { text: "大概率会在“找点事做”和“算了吧躺着挺好”的纠结中，把这几个小时刷手机刷过去。", type: "D" },
      { text: "看谁有空约一约，或者主动问问身边的人有没有需要帮忙的。", type: "C" }
    ]
  },
  {
    id: 10,
    text: "如果把你的精神电量比作手机电池，你觉得它最像哪种状态？",
    options: [
      { text: "电量永远显示 100%，但其实是虚电，稍微一用力（比如做点正事）就瞬间黑屏。", type: "D" },
      { text: "有一个极度耗电的“后台查杀程序”一直在运行（不停地自我审查和苛责），导致永远充不满电。", type: "B" },
      { text: "总是插着别人的充电线，把自己的电分享给别人，自己却常常电量告急。", type: "C" },
      { text: "电池很容易发烫，外界温度（环境/他人情绪）稍微变化一点，电量就狂掉。", type: "A" }
    ]
  }
];

const resultProfiles = {
  A: {
    title: "⚡️【超分倍率情绪雷达】",
    subtitle: "—— 高敏共情型漏电",
    description: "你的表面稳如老狗，内心已经演完了一部《甄嬛传》。别人的一声叹气、一个微表情、甚至半分钟不回微信，都能被你的雷达精准捕捉并放大10倍。你不是在社交，你是在做全天候的“人类微表情刑侦分析”。",
    comfort: "你不是矫情，你只是感受力太强。这波电漏得心甘情愿又遍体鳞伤，你的温柔太费电了，该给自己建个绝缘防震带了。",
    ctaText: "领取你的《高敏体质防漏电装甲包》"
  },
  B: {
    title: "⚡️【八百倍速思想巨人】",
    subtitle: "—— 完美主义耗能",
    description: "只要还没开始做，你在脑子里就已经拿了诺贝尔奖；一旦要动手，你就被“怕搞砸”的恐惧吓得原地瘫痪。你的电量全耗在了“未雨绸缪”和无穷无尽的“自我鞭打”上。计划列得比谁都完美，执行前先消耗 99% 的电量做心理建设。",
    comfort: "你不是效率低，你只是脑机接口超载了。放宽心，60分的你其实已经吊打很多人了。",
    ctaText: "领取你的《允许把事情搞砸脱敏处方》"
  },
  C: {
    title: "⚡️【全天候共享充电宝】",
    subtitle: "—— 无边界讨好型漏电",
    description: "你的 USB 接口永远向全世界敞开。你太懂事了，懂事到宁愿委屈自己，也怕看到别人失望。同事的麻烦你接着，朋友的苦水你听着，每次社交结束，你都像被吸干了阳气，回到家只想静静地原地长蘑菇。",
    comfort: "亲爱的拔罐大师，停止给全世界输血吧。讨好别人并不会让你真正被爱，守住边界才会。",
    ctaText: "领取你的《零内疚优雅拒绝话术指南》"
  },
  D: {
    title: "⚡️【薛定谔的长期待机】",
    subtitle: "—— 伪装忙碌型漏电",
    description: "间歇性踌躇满志，持续性清醒地看着时间流逝。你没做任何重体力活，但每天的电量都被不知名的后台 App（无意义的短视频、盲目的焦虑、精神内耗）悄悄抽干。你以为你在休息，但内心的负罪感让你越躺越累。",
    comfort: "别再用假动作掩饰核心焦虑了。多巴胺滥用只会带来更深的空虚，你需要的是真正的“强制关机重启”。",
    ctaText: "领取你的《多巴胺戒断与深度休息手册》"
  }
};

const typeOrder = ["A", "B", "C", "D"];
const app = document.getElementById("app");

const state = {
  stage: "landing",
  currentIndex: 0,
  answers: [],
  scores: { A: 0, B: 0, C: 0, D: 0 },
  lastHitType: null,
  selectionLocked: false,
  loadingTimerId: null,
  nextQuestionTimerId: null,
  captureState: "idle",
  capturedDataUrl: "",
  modalOpen: false
};

function clearTimers() {
  if (state.loadingTimerId) {
    window.clearTimeout(state.loadingTimerId);
    state.loadingTimerId = null;
  }
  if (state.nextQuestionTimerId) {
    window.clearTimeout(state.nextQuestionTimerId);
    state.nextQuestionTimerId = null;
  }
}

function resetQuizState() {
  clearTimers();
  state.currentIndex = 0;
  state.answers = [];
  state.scores = { A: 0, B: 0, C: 0, D: 0 };
  state.lastHitType = null;
  state.selectionLocked = false;
  state.captureState = "idle";
  state.capturedDataUrl = "";
  state.modalOpen = false;
}

function getPrimaryType() {
  const maxScore = Math.max(...Object.values(state.scores));
  const winners = typeOrder.filter((type) => state.scores[type] === maxScore);

  if (winners.length === 1) {
    return winners[0];
  }
  if (state.lastHitType && winners.includes(state.lastHitType)) {
    return state.lastHitType;
  }
  return winners[0];
}

function getCaptureMessage() {
  if (state.captureState === "rendering") {
    return "报告图生成中，请稍候...";
  }
  if (state.captureState === "success") {
    return "已生成图片并触发下载。若下载未生效，请长按下方预览图保存到相册。";
  }
  if (state.captureState === "failed") {
    return "当前环境限制了自动下载。请直接长按截图保存，或长按下方预览图保存。";
  }
  return "提示：点击“长按保存检测报告”会尝试自动生成图片；若失败会给出长按截图兜底方式。";
}

function triggerImageDownload(dataUrl) {
  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = `精神电量检测报告-${Date.now()}.png`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

async function handleCaptureResult() {
  if (state.captureState === "rendering") {
    return;
  }

  state.captureState = "rendering";
  state.capturedDataUrl = "";
  renderResult();

  const target = document.getElementById("resultCard");
  if (!target) {
    state.captureState = "failed";
    renderResult();
    return;
  }

  try {
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }
    if (typeof window.html2canvas !== "function") {
      throw new Error("html2canvas not available");
    }

    const scale = Math.min(2, window.devicePixelRatio || 1);
    const canvas = await window.html2canvas(target, {
      backgroundColor: "#070b14",
      scale,
      useCORS: true,
      logging: false
    });

    const dataUrl = canvas.toDataURL("image/png");
    state.capturedDataUrl = dataUrl;
    triggerImageDownload(dataUrl);
    state.captureState = "success";
  } catch (error) {
    console.error("capture failed:", error);
    state.captureState = "failed";
  }

  renderResult();
}

function startQuiz() {
  resetQuizState();
  state.stage = "quiz";
  renderQuiz();
}

function backToLanding() {
  resetQuizState();
  state.stage = "landing";
  renderLanding();
}

function handleAnswer(optionIndex) {
  if (state.selectionLocked) {
    return;
  }
  const question = questions[state.currentIndex];
  const option = question.options[optionIndex];

  state.selectionLocked = true;
  state.answers.push({
    questionId: question.id,
    optionIndex,
    type: option.type
  });
  state.scores[option.type] += 1;
  state.lastHitType = option.type;

  const optionButtons = Array.from(document.querySelectorAll(".option-btn"));
  const selectedButton = optionButtons[optionIndex];
  if (selectedButton) {
    selectedButton.classList.add("is-selected");
  }
  optionButtons.forEach((button) => {
    button.disabled = true;
  });

  state.nextQuestionTimerId = window.setTimeout(() => {
    if (state.currentIndex < questions.length - 1) {
      state.currentIndex += 1;
      state.selectionLocked = false;
      renderQuiz();
      return;
    }

    state.stage = "loading";
    state.selectionLocked = false;
    renderLoading();
  }, 300);
}

function renderLanding() {
  app.innerHTML = `
    <main class="shell" aria-live="polite">
      <div class="badge">精神电量漏电检测局</div>
      <h1 class="title">你的电，漏在哪里？</h1>
      <p class="subtitle">
        10 道扫描题，定位你最常见的精神漏电模式。<br>
        全程约 1 分钟，建议凭直觉作答。
      </p>
      <button class="primary-btn" id="startBtn" type="button">开始扫描</button>
    </main>
  `;

  document.getElementById("startBtn")?.addEventListener("click", startQuiz);
}

function renderQuiz() {
  const question = questions[state.currentIndex];
  const total = questions.length;
  const progressText = `${state.currentIndex + 1}/${total}`;
  const progressPercent = Math.round(((state.currentIndex + 1) / total) * 100);

  const optionsHtml = question.options
    .map((option, index) => {
      return `
        <button class="option-btn" type="button" data-index="${index}">
          <span class="option-tag">${option.type}</span>
          <span>${option.text}</span>
        </button>
      `;
    })
    .join("");

  app.innerHTML = `
    <main class="shell" aria-live="polite">
      <div class="quiz-head">
        <span>信号采集中...</span>
        <span>${progressText}</span>
      </div>
      <div class="progress-track">
        <div class="progress-bar" style="width:${progressPercent}%"></div>
      </div>
      <article class="question-card">${question.text}</article>
      <section class="options">${optionsHtml}</section>
    </main>
  `;

  const buttons = Array.from(document.querySelectorAll(".option-btn"));
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.index);
      handleAnswer(index);
    });
  });
}

function renderLoading() {
  clearTimers();
  app.innerHTML = `
    <main class="shell loading-wrap" aria-live="polite">
      <div class="badge">计算中</div>
      <div class="scanner" aria-hidden="true">
        <span></span><span></span><span></span><span></span><span></span>
      </div>
      <p class="loading-text">正在解析脑电波数据...</p>
    </main>
  `;

  state.loadingTimerId = window.setTimeout(() => {
    state.stage = "result";
    renderResult();
  }, 2000);
}

function openRechargeModal() {
  state.modalOpen = true;
  renderResult();
}

function closeRechargeModal() {
  state.modalOpen = false;
  renderResult();
}

function renderResult() {
  const primaryType = getPrimaryType();
  const profile = resultProfiles[primaryType];

  const scoreHtml = typeOrder
    .map((type) => {
      return `<div class="score-chip">${type}<b>${state.scores[type]}</b></div>`;
    })
    .join("");

  const previewHtml = state.capturedDataUrl
    ? `<figure class="preview-wrap"><img src="${state.capturedDataUrl}" alt="检测报告预览图"></figure>`
    : "";

  app.innerHTML = `
    <main class="shell" aria-live="polite">
      <div id="resultCard" class="result-card">
        <div class="badge">检测完成 · 主类型 ${primaryType}</div>
        <h2 class="result-title">${profile.title}</h2>
        <p class="result-subtitle">${profile.subtitle}</p>
        <p class="result-desc">${profile.description}</p>
        <p class="comfort">${profile.comfort}</p>
        <div class="score-grid">${scoreHtml}</div>
        <p class="weak-note">结果仅供参考</p>
      </div>

      <button class="primary-btn" id="saveBtn" type="button">长按保存检测报告</button>
      <button class="secondary-btn" id="rechargeBtn" type="button">🔋 领取专属急救充电包</button>
      <div class="capture-status ${state.captureState}">${getCaptureMessage()}</div>
      ${previewHtml}

      <button class="minor-btn" id="retryBtn" type="button">重新扫描</button>
    </main>

    <aside class="modal ${state.modalOpen ? "is-open" : ""}" id="rechargeModal" aria-hidden="${state.modalOpen ? "false" : "true"}">
      <section class="modal-panel" role="dialog" aria-modal="true" aria-label="领取专属急救充电包">
        <h3 class="modal-title">🔋 领取专属急救充电包</h3>
        <div class="qr-placeholder" aria-hidden="true"></div>
        <p class="modal-copy">长按添加局长微信，发送截图获取 14 天充电行动清单。</p>
        <button class="modal-close" id="closeModalBtn" type="button">我知道了</button>
      </section>
    </aside>
  `;

  document.getElementById("saveBtn")?.addEventListener("click", handleCaptureResult);
  document.getElementById("rechargeBtn")?.addEventListener("click", openRechargeModal);
  document.getElementById("retryBtn")?.addEventListener("click", startQuiz);
  document.getElementById("closeModalBtn")?.addEventListener("click", closeRechargeModal);

  const modal = document.getElementById("rechargeModal");
  modal?.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeRechargeModal();
    }
  });
}

function render() {
  if (state.stage === "landing") {
    renderLanding();
    return;
  }
  if (state.stage === "quiz") {
    renderQuiz();
    return;
  }
  if (state.stage === "loading") {
    renderLoading();
    return;
  }
  renderResult();
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.modalOpen) {
    closeRechargeModal();
  }
});

window.addEventListener("beforeunload", clearTimers);

backToLanding();
