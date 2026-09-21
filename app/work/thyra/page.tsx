import { WorkDocument, WorkFigure, WorkSection } from '@/components/work-document';

export const dynamic = 'force-static';

const base = '/assets/thyra/';

export default function ThyraPage() {
  return <WorkDocument category="HEALTHCARE & SERVICE DESIGN" title="Thyra" subtitle="Patient-centered I-131 Care"
    description={<><p>以患者为中心的甲状腺癌 I-131 治疗服务优化设计</p><p className="work-partner">美国明尼苏达大学医学院合作项目 / University of Minnesota Medical School collaboration</p><p>梳理中美就医路径与关键服务断点，协同设计 AI 健康助手，将个性化治疗时间线、健康教育与日常决策支持连接起来。</p></>}>
    <WorkSection number="01" title="Care Journey">
      <p>研究从患者完整的治疗经历出发，比较准备、治疗、隔离与复查阶段的服务触点，以及不同就医环境带来的支持需求。</p>
      <WorkFigure src={base+'care-paths.webp'} alt="Comparison of Chinese and US I-131 care journeys and service pain points" caption="FIG. 01 / 中美 I-131 治疗路径与服务痛点对照。项目研究材料。" />
    </WorkSection>
    <WorkSection number="02" title="Patient & Care Team">
      <p>材料中的患者反馈呈现了信息混乱、反复确认和隔离焦虑；医护视角则揭示重复性咨询与现有教育材料之间的服务断点。</p>
      <ul className="work-insights"><li><strong>Understanding</strong><span>将复杂、静态的说明转化为当前阶段可理解的行动。</span></li><li><strong>Everyday Decisions</strong><span>为饮食与居家隔离中的具体疑问提供情境化支持。</span></li><li><strong>Continuity</strong><span>让患者日常支持与医护服务保持衔接。</span></li></ul>
      <WorkFigure src={base+'insights.webp'} alt="Synthesis of patient and care-team needs into timely, trustworthy, transparent and thoughtful guidance" caption="FIG. 02 / 患者与医护洞察综合。" />
    </WorkSection>
    <WorkSection number="03" title="Service System">
      <p>Thyra 以对话作为日常决策入口，以治疗阶段组织提醒、健康教育和随访支持。服务流程同时呈现患者行为、界面触点和 Agent 逻辑。</p>
      <WorkFigure src={base+'service-flow.webp'} alt="Proposed service flow connecting patient actions, interfaces, agent logic and care-team feedback" caption="FIG. 03 / 新服务流程：从治疗准备到恢复与随访。预期服务收益属于设计目标。" />
    </WorkSection>
    <WorkSection number="04" title="Core Interactions">
      <h3>Personalized Timeline</h3><p>通过引导问答与个性化时间线，帮助患者理解当前阶段与下一步准备。</p>
      <WorkFigure src={base+'timeline.webp'} alt="Thyra onboarding questions and personalized treatment preparation screens" caption="FIG. 04 / 个性化治疗路径与健康教育原型。" />
      <h3>Low-iodine Diet Assistant</h3><p>将饮食疑问拆解为逐步确认，并连接到食物记录，减少在多个信息入口间寻找答案的负担。</p>
      <WorkFigure src={base+'diet-assistant.webp'} alt="Diet assistant conversation flowing from a food question to a food log" caption="FIG. 05 / 低碘饮食助手：提问、逐步确认与记录。交互原型。" />
      <h3>Spatial Guidance</h3><p>探索将隔离距离要求转化为与家庭空间相关的可视化提示，连接空间理解与日常照护。</p>
      <WorkFigure src={base+'isolation.webp'} alt="Concept for home isolation distance visualization and connected device guidance" caption="FIG. 06 / 隔离距离可视化与设备联动概念。" />
    </WorkSection>
    <WorkSection number="05" title="Preliminary Validation">
      <p className="work-result">约 30%<span>平均就医决策交互路径缩短 / Preliminary result</span></p>
      <p>初步验证表明，平均就医决策交互路径可缩短约 30%。</p>
      <p className="work-evidence-note">验证记录待补充：样本、任务范围、比较基线与计算方式。该指标描述交互路径，不代表临床治疗效果。</p>
      <p>这一项目将我的设计关注从单个界面扩展到患者、医护、信息与生活环境之间的关系。设计的目标是让复杂的照护过程更容易理解与执行。</p>
    </WorkSection>
  </WorkDocument>;
}
