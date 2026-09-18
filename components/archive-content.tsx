/* oxlint-disable next/no-html-link-for-pages -- Full navigation avoids a vinext production RSC navigation failure. */
import type { ReactNode } from 'react';
import Link from 'next/link';

export type ArchiveEntryId = 'about' | 'work' | 'archive' | 'contact';
export type ArchiveTargetId = ArchiveEntryId | 'second-nice';

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
        <article className="archive-project">
          <span>SPECULATIVE DESIGN</span>
          <h3><a className="archive-work-link" href="/work/x03?from=room">X03 — Governed by the Protocol ↗</a></h3>
          <p className="project-subtitle">A speculative film on AI-mediated communication</p>
          <p>当沟通被交给身体中的 AI 代理，人类还拥有多少表达的自主性？</p>
          <p className="project-role">INDEPENDENT PROJECT / XIAO YUCHENG</p>
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
        <Fact label="Photography"><a className="archive-project-link" href="/archive/photo?from=room"><span>PHOTO ALBUMS / 摄影影集</span><small>2025 秋季学期总结 · 格陵兰暑期学校</small></a></Fact>
        <Fact label="Field Notes"><p>日常观察、旅行记录与视觉研究 / Observations and visual research</p></Fact>
        <Fact label="Architecture"><p>[ Add architecture works ]</p></Fact>
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
