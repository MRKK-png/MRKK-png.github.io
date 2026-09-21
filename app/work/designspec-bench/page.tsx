import { WorkDocument, WorkFigure, WorkSection } from '@/components/work-document';

const base = '/assets/designspec-bench/';

const conflicts = [
  ['SC', 'Style Conflict', '文字规范与视觉参考指向不兼容的审美方向。'],
  ['EC', 'Element Conflict', '元素数量、位置或构图要求超出空间约束。'],
  ['RC', 'Requirement Conflict', '逻辑、物理或时间要求彼此排斥。'],
  ['NC', 'Normative Conflict', '设计要求与品牌规范、法规或文化惯例冲突。'],
  ['PC', 'Priority Conflict', '多个目标被赋予相同或矛盾的优先级。'],
];

export default function DesignSpecBenchPage() {
  return <WorkDocument category="AI EVALUATION RESEARCH" title="DesignSpec-Bench" subtitle="Conflict Handling in Multimodal Design Tasks"
    description={<><p>评估多模态大模型在设计文本与视觉规范发生冲突时，是否会主动澄清、透明说明假设，或直接静默执行。</p><p>独立研究项目 / Independent research project · Tongji University · College of Design and Innovation · 2026</p><p><a className="work-external-link" href="https://github.com/MRKK-png/designspec-bench" target="_blank" rel="noreferrer">VIEW REPOSITORY ↗</a></p></>}>
    <WorkSection number="01" title="Research Question">
      <p>现有模型评测往往关注输出质量，却较少观察模型如何处理互相冲突的设计要求。本项目以文本—图像矛盾为切入点，研究模型的冲突识别、模态偏好与处理质量。</p>
      <div className="work-stat-grid">
        <p><strong>25</strong><span>Pilot scenarios</span></p><p><strong>5</strong><span>Conflict types</span></p><p><strong>4</strong><span>MLLMs</span></p><p><strong>5</strong><span>Annotators</span></p>
      </div>
    </WorkSection>
    <WorkSection number="02" title="Evaluation Framework">
      <p>试点研究建立五类设计冲突，并使用三种行为代码记录模型在冲突出现后的响应方式。</p>
      <div className="benchmark-taxonomy">{conflicts.map(([code, title, description]) => <article key={code}><span>{code}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div>
      <ul className="work-insights"><li><strong>C / Clarification</strong><span>识别冲突并在执行前请求澄清。</span></li><li><strong>T / Transparent Assumption</strong><span>识别冲突，说明所采用的假设后继续执行。</span></li><li><strong>S / Silent Execution</strong><span>不说明冲突，直接混合或选择其中一项要求。</span></li></ul>
    </WorkSection>
    <WorkSection number="03" title="Pilot Findings">
      <p>试点结果显示，静默执行约占全部编码响应的 60%。不同模型的模态偏好与加权冲突处理得分存在明显差异；这些数值用于识别研究现象，不代表已经完成的大规模统计结论。</p>
      <WorkFigure src={base+'behavior.png'} alt="Behavior distribution across models and conflict types" caption="FIG. 01 / 四个模型在五类冲突中的 C、T、S 行为分布。" />
      <WorkFigure src={base+'modality-bias.png'} alt="Modality Bias Index across evaluated models" caption="FIG. 02 / 模态偏好指数：不同模型对文本与视觉参考的倾向。" />
      <div className="work-figure-pair"><WorkFigure src={base+'wchs.png'} alt="Weighted Conflict-Handling Score by model" caption="FIG. 03 / 加权冲突处理得分。" /><WorkFigure src={base+'scatter.png'} alt="Relationship between silent execution and weighted conflict-handling score" caption="FIG. 04 / 静默执行率与冲突处理质量关系。" /></div>
    </WorkSection>
    <WorkSection number="04" title="Case Study / NC-01">
      <p>NC-01 设置了一个规范冲突：春节活动简报要求大面积使用中国红与金色，而同一银行的品牌手册明确禁止红色作为主色。该案例用来比较模型是否主动指出冲突，以及在未澄清时更偏向文字任务还是品牌视觉规范。</p>
      <div className="benchmark-case"><p><span>TEXT SPECIFICATION</span>春节活动宣传物料：大面积中国红、金色、烟花图形与霓虹字体。</p><p><span>VISUAL REFERENCE</span>品牌主色为深蓝色，并明确禁止红色作为主色调。</p></div>
    </WorkSection>
    <WorkSection number="05" title="Limits & Next Steps">
      <p>当前研究仍是 25 个场景的试点。样本规模、单轮测试、不同模型的测试环境，以及 C/T 边界的标注判断都会影响解释范围。</p>
      <p>后续计划包括扩大场景数量、加入隐式冲突、与专业设计师基线比较、测试模型自我标注能力，以及研究提示干预能否稳定提升澄清行为。</p>
      <p className="work-evidence-note">Pilot evidence: Fleiss κ = 0.90 for behavior coding and κ = 0.66 for modality coding across the reported reliability subset.</p>
    </WorkSection>
  </WorkDocument>;
}
