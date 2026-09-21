/* oxlint-disable next/no-img-element -- Project photographs are pre-sized archive assets. */
import { ArchiveReturn } from '@/components/archive-return';

const base = '/images/2nd-nice';

export default function SecondNiceArchivePage() {
  return (
    <main className="second-nice-page">
      <header className="project-document-header">
        <ArchiveReturn />
        <p>PERSONAL ARCHIVE / SOCIAL DESIGN / 001</p>
        <p>DATE / [ TO BE ADDED ]</p>
      </header>

      <article className="project-document">
        <section className="second-nice-hero">
          <div className="project-mark">
            <img src={`${base}/logo.png`} width={394} height={394} alt="2nd NICE 第二好 red and white project mark" />
          </div>
          <div className="project-title-block">
            <p className="project-kicker">ARCHIVE ENTRY / COMMUNITY PRACTICE</p>
            <h1>2nd NICE <span>第二好</span></h1>
            <p className="project-subtitle-large">Community-based circular fashion practice</p>
            <p>在中国城市社区语境下探索可持续生活方式，通过二手物品循环利用与社区共创，建立人与物品、人与社区之间的新关系。</p>
            <p>A community-based experiment exploring sustainable lifestyles in urban China through second-hand fashion circulation and collective participation.</p>
          </div>
        </section>

        <section className="project-meta-grid" aria-label="Project metadata">
          <div><span>ROLE</span><strong>项目协作者 / Co-worker</strong></div>
          <div><span>FOCUS</span><strong>Social Design · Community · Circular Fashion</strong></div>
          <div><span>LOCATIONS</span><strong>徐汇 · 杨浦 · 静安 / Shanghai</strong></div>
          <div><span>DATE</span><strong>[ TO BE ADDED ]</strong></div>
        </section>

        <section className="project-section project-context">
          <div className="project-section-heading"><span>01</span><h2>Context</h2></div>
          <div className="project-section-copy">
            <p className="project-lead">旧物循环不只关乎减少浪费，也关乎城市居民如何重新理解消费、使用与拥有。</p>
            <p>2nd NICE 将二手服装与社区日常连接起来，以实体空间、视觉传播和参与式活动作为入口，探索物品如何在新的使用者和生活场景中获得第二次生命。</p>
            <p>Second-hand circulation becomes a way to reconsider consumption and reuse through everyday community life.</p>
          </div>
          <figure className="project-figure poster-figure">
            <img src={`${base}/beizhan-opening.jpg`} width={1279} height={1706} alt="2nd NICE Beizhan community charity shop opening poster" loading="lazy" />
            <figcaption>FIG. 01 / 静安区北站街道慈善超市开业视觉。海报标注地址为新疆路 485 号。</figcaption>
          </figure>
        </section>

        <section className="project-section project-practice">
          <div className="project-section-heading"><span>02</span><h2>Research &amp; Practice</h2></div>
          <div className="project-section-copy">
            <p className="project-lead">作为项目协作者，我参与三次视觉传播方案策划，并协助组织两次旧物改造工作坊。</p>
            <p>在工作坊现场，我引导 10+ 个家庭使用团队导师设计的基础缝纫工具包，将废旧衣物拆解、组合并改造为个性化托特包。工具包提供基础方法，参与者则通过材料选择与亲手制作赋予旧物新的身份。</p>
            <p>As a project co-worker, I contributed to three visual communication initiatives and co-organized two upcycling workshops. On site, I guided more than ten families in using a basic sewing toolkit designed by the team instructor to transform discarded garments into personalized tote bags.</p>
          </div>
          <div className="project-media-pair">
            <figure className="project-figure">
              <img src={`${base}/remake-workshop.jpg`} width={1080} height={1435} alt="2nd NICE Remake Eco Bag workshop announcement" loading="lazy" />
              <figcaption>FIG. 02 / “唤醒系列”帆布袋改造工作坊视觉。活动日期：2026.01.10。</figcaption>
            </figure>
            <figure className="project-figure">
              <img src={`${base}/community-look-02.jpg`} width={1350} height={1800} alt="Two community participants presenting garments outside a 2nd NICE location" loading="lazy" />
              <figcaption>FIG. 03 / 社区参与者与服装的现场记录。具体活动日期：[ 待补充 ]。</figcaption>
            </figure>
          </div>
          <div className="project-workshop-records">
            <figure className="project-figure">
              <img src={`${base}/workshop-process.webp`} width={1600} height={1200} alt="Hands arranging and joining reused fabric pieces into a bag during a workshop" loading="lazy" />
              <figcaption>WORKSHOP RECORD / 工作坊现场：通过材料拼接与手工制作，探索旧衣物的再次使用。日期：[ 待补充 ]。</figcaption>
            </figure>
            <figure className="project-figure">
              <img src={`${base}/workshop-participation.webp`} width={1400} height={1050} alt="A group presenting a handmade tote bag" loading="lazy" />
              <figcaption>PARTICIPATION RECORD / 成品托特包与参与合影。日期：[ 待补充 ]。</figcaption>
            </figure>
            <figure className="project-figure">
              <img src={`${base}/workshop-detail-02.webp`} width={1800} height={1350} alt="Hands arranging a printed tote bag during an upcycling workshop" loading="lazy" />
              <figcaption>MAKING DETAIL / 旧衣改造过程中对托特包图案与布料结构的现场调整。Canon PowerShot E1，2025.11.22。</figcaption>
            </figure>
          </div>
        </section>

        <section className="project-section project-impact">
          <div className="project-section-heading"><span>03</span><h2>Community Impact</h2></div>
          <div className="project-section-copy">
            <p className="project-lead">项目在上海徐汇区、杨浦区与静安区落地，通过与社区及居民协作，持续探索可参与的可持续生活方式。</p>
            <p>Rather than treating residents as an audience, the practice invited them to become participants in the circulation, reinterpretation and continued life of everyday objects.</p>
          </div>
          <figure className="project-figure project-wide-figure">
            <img src={`${base}/community-look-01.jpg`} width={1350} height={1800} alt="A participant documenting a personal outfit outside The Next Life of Things shop" loading="lazy" />
            <figcaption>FIG. 04 / 门店外的参与者穿搭记录。地点与活动日期：[ 待补充 ]。</figcaption>
          </figure>
          <div className="district-index" aria-label="Implementation districts">
            <span>01 / XUHUI</span><span>02 / YANGPU</span><span>03 / JING&apos;AN</span>
          </div>
        </section>

        <section className="project-section project-reflection">
          <div className="project-section-heading"><span>04</span><h2>Reflection</h2></div>
          <blockquote>
            <p>Design is not only creating products, but also shaping relationships between people, objects, and environments.</p>
            <footer>设计不仅是创造产品，也是在塑造人与物、人与社区及人与环境之间的关系。</footer>
          </blockquote>
          <div className="material-strip">
            <figure className="project-figure">
              <img src={`${base}/material-detail-01.jpg`} width={1350} height={1800} alt="Close detail of patterned second-hand clothing and pearl accessory" loading="lazy" />
              <figcaption>FIG. 05 / 服装、饰品与旧物标签的细节记录。Canon PowerShot E1，2025.11.23。</figcaption>
            </figure>
            <figure className="project-figure">
              <img src={`${base}/material-detail-02.jpg`} width={1350} height={1800} alt="Close detail of layered yellow, brown and striped textiles" loading="lazy" />
              <figcaption>FIG. 06 / 多层纺织材料与穿着痕迹。Canon PowerShot E1，2025.11.23。</figcaption>
            </figure>
          </div>
        </section>

        <footer className="project-document-footer">
          <p>2nd NICE 第二好</p>
          <p>ARCHIVE STATUS / ONGOING</p>
          <ArchiveReturn />
        </footer>
      </article>
      <div className="project-scanlines" aria-hidden="true" />
    </main>
  );
}
