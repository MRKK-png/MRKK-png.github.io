/* oxlint-disable jsx-a11y/media-has-caption -- Original supplied film has no subtitle file; narrative is documented below. */
import { WorkDocument, WorkFigure, WorkSection } from '@/components/work-document';

const base = '/assets/x03/';

export default function X03Page() {
  return <WorkDocument category="SPECULATIVE DESIGN" title="X03" subtitle="Governed by the Protocol"
    description={<><p>当沟通被交给身体中的 AI 代理，人类还拥有多少表达的自主性？</p><p>一项关于 AI 植入、沟通黑箱与人类自主性的推想影像。将身体中的 AI 系统设想为交流代理：人们能够感知它的运行，却无法理解内部协议。</p><p className="work-partner">INDEPENDENT PROJECT / XIAO YUCHENG · 独立完成</p></>}>
    <WorkSection number="01" title="Film">
      <video className="work-film" src={base+'film.mp4'} poster={base+'poster.webp'} controls playsInline preload="none" aria-label="X03 — Governed by the Protocol, speculative film" />
      <p className="work-evidence-note">原始成片 / Original film · Sound on request</p>
    </WorkSection>
    <WorkSection number="02" title="Premise">
      <p>项目设想 AI 系统成为人体的一部分。当人与人交流时，体内代理通过不可理解的协议交换信息。便利逐渐成为依赖，表达则可能被系统接管。</p>
      <p>The film imagines communication becoming an exchange between embodied AI agents, while the people involved remain outside the protocol.</p>
    </WorkSection>
    <WorkSection number="03" title="Narrative">
      <div className="work-narrative"><div><span>01 / EVERYDAY ILLUSION</span><p>从创业者、产品经理、学生与作家的日常使用建立未来设定。</p></div><div><span>02 / SILENT COLLABORATION</span><p>人与人的交流逐渐被植入体之间的数据交换替代。</p></div><div><span>03 / THE FUTILITY OF AWAKENING</span><p>试图表达的人发现，自己的声音与表情也受制于协议。</p></div></div>
      <WorkFigure src={base+'communication.webp'} alt="People walking through a future city in a frame from the original X03 film" caption="FIG. 01 / 原片中的未来城市与沟通场景。" />
      <WorkFigure src={base+'awakening.webp'} alt="A writer trying to speak while holding his ears, from the X03 film" caption="FIG. 02 / 原片中的觉醒与失语。" />
    </WorkSection>
    <WorkSection number="04" title="Process">
      <p>项目材料记录了 moodboard、角色设定、七段分镜、生成提示词和影像迭代。以叙事设定组织图像与视频生成，再将各段镜头组合为成片。</p>
      <WorkFigure src={base+'workflow.webp'} alt="Original workflow diagram for script prompts, image, 3D model and video generation" caption="FIG. 03 / 项目材料中的制作流程。" />
    </WorkSection>
    <WorkSection number="05" title="Reflection">
      <blockquote className="work-quote">Who speaks when an agent speaks for us?</blockquote>
      <p>通过一个推想世界，将“代理替我们完成任务”推进到“代理替我们表达”的边界，追问效率、理解与自主性之间的关系。</p>
    </WorkSection>
  </WorkDocument>;
}
