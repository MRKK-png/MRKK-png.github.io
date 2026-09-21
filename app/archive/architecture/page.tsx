import { WorkDocument, WorkFigure, WorkSection } from '@/components/work-document';

export const dynamic = 'force-static';

const base = '/assets/architecture/';

export default function ArchitectureArchivePage() {
  return <WorkDocument section="ARCHIVE" category="ARCHITECTURE / SELECTED WORKS" title="ARCHITECTURE WORKS" subtitle="本科建筑设计选录 / Selected undergraduate works"
    description={<><p>两项本科建筑设计记录，关注公共文化空间与学习环境如何通过空间组织、公共界面与环境策略回应使用者。</p><p>Selected studies from an architecture background, retained as part of an evolving spatial archive.</p></>}>
    <WorkSection number="01" title="藏书盒子">
      <div className="architecture-award"><span>AWARD / 2024</span><strong>全国决赛一等奖</strong><small>米兰设计周中国高校设计学科师生优秀作品展 · 广东赛区一等奖</small></div>
      <p>“与城市对话的生态容器”以层叠公共平台、阅读空间与庭院组织城市文化空间，并通过遮阳、通风与绿化策略建立室内外之间的连续关系。</p>
      <WorkFigure src={base + 'book-box-01.webp'} alt="藏书盒子建筑设计总图、剖面与夜景表现" caption="FIG. 01 / 藏书盒子：总体空间、剖面关系与城市界面。" />
      <WorkFigure src={base + 'book-box-02.webp'} alt="藏书盒子建筑设计概念、立面与空间表现" caption="FIG. 02 / 公共平台、生态策略与空间节点。" />
      <div className="work-figure-pair architecture-certificates">
        <WorkFigure src={base + 'book-box-national-award.webp'} alt="藏书盒子米兰设计周全国决赛一等奖获奖证书" caption="AWARD RECORD / 全国决赛一等奖。" width={900} height={1260} />
        <WorkFigure src={base + 'book-box-guangdong-award.webp'} alt="藏书盒子米兰设计周广东赛区一等奖获奖证书" caption="AWARD RECORD / 广东赛区一等奖。" width={900} height={1260} />
      </div>
    </WorkSection>
    <WorkSection number="02" title="寓学于乐">
      <div className="architecture-award"><span>AWARD / 2024</span><strong>全国决赛三等奖</strong><small>米兰设计周中国高校设计学科师生优秀作品展 · 广东赛区一等奖</small></div>
      <p>“一片逃离枯燥环境的森林”重新组织校园中的教室、连廊、庭院与屋顶活动空间，让学习、游戏和日常交往在多层次路径中发生。</p>
      <WorkFigure src={base + 'learning-forest-01.webp'} alt="寓学于乐校园建筑设计鸟瞰、概念与分析" caption="FIG. 03 / 寓学于乐：校园结构、活动路径与空间概念。" />
      <WorkFigure src={base + 'learning-forest-02.webp'} alt="寓学于乐校园建筑设计剖面与空间表现" caption="FIG. 04 / 庭院、连廊与学习空间的关系。" />
      <div className="work-figure-pair architecture-certificates">
        <WorkFigure src={base + 'learning-forest-national-award.webp'} alt="寓学于乐米兰设计周全国决赛三等奖获奖证书" caption="AWARD RECORD / 全国决赛三等奖。" width={900} height={1260} />
        <WorkFigure src={base + 'learning-forest-guangdong-award.webp'} alt="寓学于乐米兰设计周广东赛区一等奖获奖证书" caption="AWARD RECORD / 广东赛区一等奖。" width={900} height={1260} />
      </div>
    </WorkSection>
  </WorkDocument>;
}
