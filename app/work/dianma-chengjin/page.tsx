import { WorkDocument, WorkFigure, WorkSection } from '@/components/work-document';

const base = '/assets/dianma/';

export default function DianmaChengjinPage() {
  return <WorkDocument category="AI PRODUCT / AGENT DESIGN" title="点马成金" subtitle="AI 能力识别与转行规划系统"
    description={<><div className="work-award"><span>AWARD / 06</span><strong>腾讯云 · TT 设计学院 Skill 创新应用大赛</strong><small>第六名 / 6TH PLACE</small></div><p>面向准备转向交互设计、产品体验与服务设计的设计学生，将课程、竞赛与实习经历转译为目标岗位能够识别的能力证据。</p><p>系统先判断方向与已有积累，再完成能力识别、缺口诊断、岗位匹配和策略驱动的作品集规划。</p></>}>
    <WorkSection number="01" title="Overview">
      <p>“点马成金”关注的不是先套用作品集模板，而是先回答三个问题：我有什么、我能投什么、我还缺什么。产品以“牛马进，千里马出”为叙事，把职业转向中的焦虑重新定义为能力识别与表达的问题。</p>
    </WorkSection>
    <WorkSection number="02" title="User Insight">
      <p>目标用户往往已经拥有环境、建筑、展陈、装置、竞赛或实习经历，但无法判断哪些经验能够被目标岗位识别。研究将问题归纳为方向判断、能力转译和缺口诊断。</p>
      <ul className="work-insights">
        <li><strong>方向判断</strong><span>面对多个职业方向，不确定自己适合投递什么。</span></li>
        <li><strong>能力转译</strong><span>做过许多项目，却无法把空间、服务与流程经验转化为岗位证据。</span></li>
        <li><strong>缺口诊断</strong><span>分不清真实能力短板、表达问题与被焦虑放大的伪需求。</span></li>
      </ul>
      <WorkFigure src={base+'user-insight.webp'} alt="点马成金面向转行设计学生的用户洞察" caption="FIG. 02 / 用户洞察：转行焦虑背后的评价标准失焦。" />
      <WorkFigure src={base+'user-segments.webp'} alt="方向判断、能力转译与缺口诊断三类用户需求" caption="FIG. 03 / 用户分群：按不同原因匹配不同帮助。" />
    </WorkSection>
    <WorkSection number="03" title="Product Positioning">
      <p>系统从用户的经历、作业、兴趣与目标岗位出发，重新命名可迁移能力，并把已有积累连接到岗位要求。输出重点是判断与行动策略，而不是直接替用户包装页面。</p>
      <WorkFigure src={base+'positioning.webp'} alt="点马成金从能力识别到岗位匹配的产品定位" caption="FIG. 04 / 产品定位：先识别能力，再匹配赛道，最后生成作品集策略。" />
    </WorkSection>
    <WorkSection number="04" title="Core Workflow">
      <p>产品采用“输入—判断—确认—产出”的闭环，将分散经历逐步转化为可以验证和使用的能力证据。</p>
      <ul className="work-insights">
        <li><strong>01 整理</strong><span>建立项目卡库，汇总简历、作品、课程与实习材料。</span></li>
        <li><strong>02 发现脉络</strong><span>从产品、交互与视觉视角识别可迁移能力。</span></li>
        <li><strong>03 诊断缺口</strong><span>区分硬要求、表达问题和焦虑放大的伪需求。</span></li>
        <li><strong>04 教材作品</strong><span>由专家知识库解释概念并指导旧项目重述。</span></li>
        <li><strong>05 匹配岗位</strong><span>结合目标岗位判断项目排序、叙事重点与补强方向。</span></li>
        <li><strong>06 排版输出</strong><span>将判断转化为作品集结构、简历方向与行动路径。</span></li>
      </ul>
      <WorkFigure src={base+'workflow.webp'} alt="点马成金六步核心工作流" caption="FIG. 05 / 核心工作流：拆解经历，生成能力证据。" />
    </WorkSection>
    <WorkSection number="05" title="System Mechanism">
      <p>系统通过模式分流、三面镜子、JD 来源标注、专家知识介入和策略驱动排版建立判断逻辑。普通工具通常美化已有内容；点马成金先判断哪些内容值得保留、如何表达，以及哪里必须补充。</p>
      <WorkFigure src={base+'system-mechanism.webp'} alt="点马成金的模式分流、能力识别、JD 标注与专家介入机制" caption="FIG. 06 / 系统机制：先判断价值，再生成表达。" />
    </WorkSection>
    <WorkSection number="06" title="Deliverables">
      <p>最终交付覆盖项目卡库、能力脉络、岗位适配策略、缺口诊断、简历方向、专家补作品指导、阶段行动路径与策略驱动的作品集结构。</p>
      <WorkFigure src={base+'deliverables.webp'} alt="点马成金案例输入、系统判断、专家介入与最终交付物" caption="FIG. 07 / 价值与交付：让经历被识别，让投递有方向。" />
    </WorkSection>
  </WorkDocument>;
}
