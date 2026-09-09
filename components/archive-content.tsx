import type { ReactNode } from 'react';

export type ArchiveEntryId = 'about' | 'work' | 'archive' | 'contact';

type ArchiveEntry = {
  eyebrow: string;
  title: string;
  subtitle: string;
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

export const archiveEntries: Record<ArchiveEntryId, ArchiveEntry> = {
  about: {
    eyebrow: 'CHAPTER 01 / IDENTITY',
    title: 'WHO AM I',
    subtitle: '身份、教育与经历 / Identity, education and experience',
    content: (
      <div className="archive-entry-content">
        <Fact label="Identity">
          <p className="archive-person-name">肖裕诚 / Shao Yucheng</p>
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
        <Fact label="Experience">
          <p><strong>墨斗云</strong></p>
          <p>AI Product Manager Intern</p>
          <p>Beijing Glee Technology · 2025.12–2026.04</p>
        </Fact>
        <Fact label="Skills">
          <ul className="archive-keywords">
            <li>AI Product Design</li><li>Interaction Design</li><li>Human-AI Interaction</li><li>Spatial Design</li>
          </ul>
        </Fact>
        <button className="archive-download" type="button" disabled>Download CV <span>COMING SOON</span></button>
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
          <span>PROJECT 01</span><h3>墨斗云</h3>
          <p className="project-subtitle">AI-powered BIM data production platform</p>
          <p>AI 辅助建筑资产生成、多模态数据处理与 B2B 产品工作流。</p>
          <p className="project-role">ROLE / AI Product Manager Intern</p>
        </article>
        <article className="archive-project">
          <span>PROJECT 02</span><h3>点马成金</h3>
          <p className="project-subtitle">AI Career Capability Diagnosis Agent</p>
          <p>将个人经历转化为能力映射、岗位匹配、差距诊断与作品集生成的 AI Agent。</p>
        </article>
        <article className="archive-project">
          <span>PROJECT 03</span><h3>DesignSpec-Bench</h3>
          <p className="project-subtitle">AI Design Capability Evaluation Benchmark</p>
          <p>评估 AI 模型能否理解设计需求的基准框架。</p>
          <ul className="archive-keywords"><li>Design Brief</li><li>Functional Constraints</li><li>Layout Logic</li><li>Visual Specification</li></ul>
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
        <Fact label="Photography"><p>[ Add photography collection ]</p></Fact>
        <Fact label="Field Notes"><p>日常观察、旅行记录与视觉研究 / Observations and visual research</p></Fact>
        <Fact label="Architecture"><p>[ Add architecture works ]</p></Fact>
        <Fact label="Research"><p>[ Add research notes ]</p></Fact>
        <Fact label="Themes">
          <ul className="archive-keywords"><li>Human-centered AI</li><li>Spatial Intelligence</li><li>Future Living</li><li>Extreme Environment</li><li>Human flourishing</li></ul>
        </Fact>
      </div>
    ),
  },
  contact: {
    eyebrow: 'DIGITAL BUSINESS CARD',
    title: 'CONTACT',
    subtitle: '保持联系 / Stay in touch',
    content: (
      <div className="archive-entry-content contact-card">
        <p className="archive-person-name">肖裕诚 / Shao Yucheng</p>
        <p>Designer<br />Researcher<br />Photographer</p>
        <Fact label="Email"><a href="mailto:2533310@tongji.edu.cn">2533310@tongji.edu.cn</a></Fact>
        <Fact label="Wechat"><p>KevX111</p></Fact>
      </div>
    ),
  },
};
