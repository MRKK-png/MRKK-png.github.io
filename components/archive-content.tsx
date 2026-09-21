/* oxlint-disable next/no-html-link-for-pages -- Full navigation avoids a vinext production RSC navigation failure. */
import type { ReactNode } from 'react';
import Link from 'next/link';

export type ArchiveEntryId = 'about' | 'work' | 'archive' | 'contact' | 'internship' | 'sources';
export type ArchiveTargetId = ArchiveEntryId | 'second-nice' | 'protocol' | 'photos';

type ArchiveEntry = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  content: ReactNode;
};

function Fact({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="archive-fact">
      <h3>{label}</h3>
      <div>{children}</div>
    </section>
  );
}

function ExperienceRecords() {
  return <>
    <article><p><strong>上海首序智能科技有限公司</strong></p><p>AI 产品经理实习生 / AI Product Manager Intern</p><p>2026.07–2026.09</p></article>
    <article><p><strong>北京构力科技有限公司 / PKPM</strong></p><p>AI 产品经理实习生 / AI Product Manager Intern</p><p>2025.12–2026.04</p></article>
  </>;
}

export const archiveEntries: Record<ArchiveEntryId, ArchiveEntry> = {
  about: {
    eyebrow: 'CHAPTER 01 / IDENTITY',
    title: 'WHO AM I',
    subtitle: '身份、教育与经历 / Identity, education and experience',
    content: (
      <div className="archive-entry-content">
        <Fact label="Identity">
          <p className="archive-person-name">肖裕诚 / XIAO YUCHENG</p>
          <p>Designer · Researcher · Photographer</p>
        </Fact>
        <Fact label="Education">
          <article>
            <p><strong>同济大学 / Tongji University</strong></p>
            <p>设计创意学院 / School of Design and Innovation</p>
            <p>Interaction Design · 2025.09–2028.07</p>
          </article>
          <article>
            <p><strong>广东工业大学 / Guangdong University of Technology</strong></p>
            <p>Architecture · 2020.09–2025.07</p>
          </article>
        </Fact>
        <Fact label="Experience"><ExperienceRecords /></Fact>
        <Fact label="Skills">
          <ul className="archive-keywords">
            <li>AI Product Design</li><li>Interaction Design</li><li>Human-AI Interaction</li><li>Spatial Design</li>
          </ul>
        </Fact>
        <a className="archive-download" href="/assets/cv/XIAO-YUCHENG-CV.pdf" download>Download CV <span>PDF · 2.7 MB</span></a>
      </div>
    ),
  },
  work: {
    eyebrow: 'CHAPTER 02 / PRACTICE',
    title: 'WHAT I CREATE',
    subtitle: '项目与专业实践 / Projects and professional work',
    content: (
      <div className="archive-entry-content project-index">
        <article className="archive-project">
          <span>HEALTHCARE &amp; SERVICE DESIGN</span>
          <h3><a className="archive-work-link" href="/work/thyra?from=room">Thyra ↗</a></h3>
          <p className="project-subtitle">Patient-centered I-131 Care</p>
          <p>以患者为中心的甲状腺癌 I-131 治疗服务优化设计。美国明尼苏达大学医学院合作项目。</p>
        </article>
        <article className="archive-project">
          <span>PROJECT 01</span><h3>墨斗云</h3>
          <p className="project-subtitle">AI-powered BIM data production platform</p>
          <p>AI 辅助建筑资产生成、多模态数据处理与 B2B 产品工作流。</p>
          <p className="project-role">ROLE / AI Product Manager Intern</p>
        </article>
        <article className="archive-project">
          <span>AI PRODUCT / AGENT DESIGN</span><h3><a className="archive-work-link" href="/work/dianma-chengjin?from=room">点马成金 ↗</a></h3>
          <p className="project-award-summary"><strong>AWARD / 06</strong> 腾讯云 · TT 设计学院 Skill 创新应用大赛</p>
          <p className="project-subtitle">AI 能力识别与转行规划系统</p>
          <p>将个人经历转化为能力识别、岗位匹配、缺口诊断与作品集策略的 Agent 设计。</p>
        </article>
        <article className="archive-project">
          <span>AI EVALUATION RESEARCH</span><h3><a className="archive-work-link" href="/work/designspec-bench?from=room">DesignSpec-Bench ↗</a></h3>
          <p className="project-subtitle">Conflict Handling in Multimodal Design Tasks</p>
          <p>评估多模态大模型面对设计文本与视觉规范冲突时的处理行为。</p>
          <ul className="archive-keywords"><li>5 Conflict Types</li><li>C / T / S Coding</li><li>4 MLLMs</li><li>Pilot Benchmark</li></ul>
        </article>

      </div>
    ),
  },
  archive: {
    eyebrow: 'CHAPTER 03 / SOURCES',
    title: 'WHAT INSPIRES ME',
    subtitle: '观察、收藏与研究 / Observations, collections and research',
    content: (
      <div className="archive-entry-content inspiration-grid">
        <Fact label="Photography"><a className="archive-project-link" href="/archive/photo?from=room"><span>PHOTO ALBUMS</span><small>BETWEEN WINDOWS · GREENLAND · EVERYDAY SPECIMENS</small></a></Fact>
        <Fact label="Moving Image"><a className="archive-project-link" href="/work/x03?from=room"><span>Governed by the Protocol</span><small>Speculative film / 推想影像</small></a></Fact>
        <Fact label="Field Notes"><a className="archive-project-link" href="/archive/photo?album=everyday-specimens&amp;from=room"><span>EVERYDAY SPECIMENS</span><small>公共空间、展示物与日常观察</small></a></Fact>
        <Fact label="Architecture"><a className="archive-project-link" href="/archive/architecture?from=room"><span>ARCHITECTURE WORKS / 建筑作品</span><small>两项本科设计选录</small></a></Fact>
        <Fact label="Research"><p>[ Add research notes ]</p></Fact>
        <Fact label="Social Design">
          <Link className="archive-project-link" href="/archive/2nd-nice">
            <span>2nd NICE 第二好</span>
            <small>Community-based circular fashion practice</small>
          </Link>
        </Fact>
        <Fact label="Themes">
          <ul className="archive-keywords"><li>Human-centered AI</li><li>Spatial Intelligence</li><li>Future Living</li><li>Extreme Environment</li><li>Human flourishing</li></ul>
        </Fact>
      </div>
    ),
  },
  internship: {
    eyebrow: 'CHAPTER 02 / INTERNSHIP', title: 'PROFESSIONAL EXPERIENCE',
    subtitle: '实习与专业实践 / Internship and professional practice',
    content: <div className="archive-entry-content"><Fact label="Experience"><ExperienceRecords /></Fact><Fact label="Practice"><article><p><strong><a className="archive-work-link" href="https://safety.yun" target="_blank" rel="noreferrer">安全词元平台 / Secure Token ↗</a></strong></p><p>面向企业与开发者的多模型 Token API 平台，围绕模型接入、调用治理、安全策略与商业化分销建立产品能力。</p><p>参与用户与竞品研究、MVP 策略梳理、Base Test Set 验证流程、B2B SaaS 分销机制及产品合规支持。</p></article><article><p><strong>墨斗云</strong></p><p>面向建筑三维 AI 模型训练的数据生产工具与工程数据平台，融合 CAD、BIM 与点云等多源数据。</p><p>参与 AI 辅助建筑资产生成、多模态数据处理与 B2B 产品工作流设计。</p></article></Fact></div>,
  },
  sources: {
    eyebrow: 'CHAPTER 03 / RESEARCH & REFERENCES', title: 'RESEARCH & REFERENCES',
    subtitle: '研究兴趣与建筑背景 / Research interests and architecture',
    content: <div className="archive-entry-content"><Fact label="Research Interests"><ul className="archive-keywords"><li>Human-centered AI</li><li>Spatial Intelligence</li><li>Future Living</li><li>Extreme Environment</li><li>Human flourishing</li></ul></Fact><Fact label="Architecture"><p>广东工业大学 / Guangdong University of Technology</p><p>Architecture · 2020.09–2025.07</p><a className="archive-project-link" href="/archive/architecture?from=room"><span>本科建筑作品选录 ↗</span><small>公共文化空间与学习环境</small></a></Fact><Fact label="References"><p>[ 参考书目与研究笔记待补充 / Reading list and research notes to be added ]</p></Fact></div>,
  },
  contact: {
    eyebrow: 'CHAPTER 04 / CONNECTION',
    title: 'CONTACT',
    content: (
      <div className="archive-entry-content contact-card">
        <p className="archive-person-name">肖裕诚 / XIAO YUCHENG</p>
        <p>Designer<br />Researcher<br />Photographer</p>
        <Fact label="Email"><a href="mailto:2533310@tongji.edu.cn">2533310@tongji.edu.cn</a></Fact>
        <Fact label="Wechat"><p>KevX111</p></Fact>
      </div>
    ),
  },
};
