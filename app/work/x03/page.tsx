/* oxlint-disable jsx-a11y/media-has-caption -- Supplied film has no subtitle file; narrative is documented below. */
import { WorkDocument, WorkFigure, WorkSection } from '@/components/work-document';
import { AiFilmWorkflow } from '@/components/ai-film-workflow';
const base = '/assets/x03/';
const beats = [
  ['01', 'EVERYDAY ILLUSION', '日常依赖', '从创业者、产品经理、学生与作家的日常使用建立未来设定。'],
  ['02', 'SILENT COLLABORATION', '静默交流', '人与人的交流逐渐被植入体之间的数据交换替代。'],
  ['03', 'THE FUTILITY OF AWAKENING', '觉醒与失语', '试图表达的人发现，自己的声音与表情也受制于协议。'],
];
export default function X03Page() {
  return <WorkDocument section="ARCHIVE" category="MOVING IMAGE / SPECULATIVE DESIGN" title="Governed by the Protocol" subtitle="A speculative film on AI-mediated communication"
    description={<><p>当沟通被交给身体中的 AI 代理，人类还拥有多少表达的自主性？</p><p>将身体中的 AI 系统设想为交流代理：人们能够感知它的运行，却无法理解内部协议。</p><p>独立完成 / INDEPENDENT PROJECT · XIAO YUCHENG</p></>}>
    <WorkSection number="01" title="Film">
      <video className="work-film" src={base+'film.mp4'} poster={base+'poster.webp'} controls playsInline preload="none" aria-label="Governed by the Protocol, speculative film" />
      <p className="work-media-note">原片比例 · 原声 / Original aspect ratio & sound</p>
    </WorkSection>
    <WorkSection number="02" title="Premise">
      <p>项目设想 AI 系统成为人体的一部分。当人与人交流时，体内代理通过不可理解的协议交换信息。便利逐渐成为依赖，表达则可能被系统接管。</p>
      <p>The film imagines communication becoming an exchange between embodied AI agents, while people remain outside the protocol.</p>
      <WorkFigure width={1280} height={543} src={base+'implant.webp'} alt="Speculative newborn neural implant scene from the project references" caption="世界设定 / WORLD BUILDING · AI 植入成为身体与社会系统的一部分。项目生成参考图。" />
    </WorkSection>
    <WorkSection number="03" title="Narrative">
      <div className="work-narrative narrative-aligned">{beats.map(([n,en,zh,copy]) => <div key={n}><span>{n}</span><h3>{en}</h3><h4>{zh}</h4><p>{copy}</p></div>)}</div>
      <h3>Communication Scenarios</h3>
      <div className="film-triptych">
        <WorkFigure width={1280} height={543} src={base+'conversation.webp'} alt="Cafe conversation with communication delegated to implants" caption="咖啡馆 / CAFE" />
        <WorkFigure width={1280} height={543} src={base+'classroom.webp'} alt="Students in a classroom with AI-mediated shared information" caption="课堂 / CLASSROOM" />
        <WorkFigure width={1280} height={543} src={base+'street.webp'} alt="Pedestrians in a future street with synchronized movement" caption="街道 / STREET" />
      </div>
    </WorkSection>
    <WorkSection number="04" title="Storyboard">
      <p>从日常使用到表达失控，分镜将抽象的“沟通黑箱”转化为可以观察的身体动作与空间场景。</p>
      <div className="film-storyboards">
        <WorkFigure width={1280} height={543} src={base+'writer.webp'} alt="Writer with AI interface in the initial everyday-use reference" caption="SHOT 01 / 日常依赖：写作被代理协助。" />
        <WorkFigure width={1280} height={543} src={base+'conversation.webp'} alt="Silent cafe interaction reference" caption="SHOT 02 / 静默交流：目光与身体动作替代交谈。" />
        <WorkFigure width={1280} height={543} src={base+'blackbox.webp'} alt="Neural data network visual reference for the black box" caption="SHOT 04 / 黑箱内部：以数据网络表现不可理解的协议。" />
        <WorkFigure width={1280} height={543} src={base+'awakening-reference.webp'} alt="Writer covering ears while trying to speak in the awakening reference" caption="SHOT 05 / 觉醒与失语：试图表达，却无法取回自己的声音。" />
      </div>
      <p className="work-evidence-note">以上为项目原始分镜与生成参考图，镜头编号沿用原材料。</p>
    </WorkSection>
    <WorkSection number="05" title="Process"><AiFilmWorkflow /></WorkSection>
    <WorkSection number="06" title="Reflection"><blockquote className="work-reflection">Who speaks when an agent speaks for us?</blockquote><p>将“代理替我们完成任务”推进到“代理替我们表达”的边界，追问效率、理解与自主性之间的关系。</p></WorkSection>
  </WorkDocument>;
}
