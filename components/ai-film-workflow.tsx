/** Project-recorded tools, not a claim that every branch was used in each shot. */
export function AiFilmWorkflow() {
  return <figure className="film-workflow" aria-labelledby="workflow-title">
    <header><p>AI WORKFLOW / VISUAL CREATION</p><h3 id="workflow-title">From Idea to Moving Image</h3><p>叙事设定 → 分镜与提示词 → 视觉生成 → 镜头迭代 → 成片</p></header>
    <div className="workflow-models"><div><span>LLM / SCRIPT</span><strong>Qwen3.5-Plus</strong></div><div><span>LLM / SCRIPT</span><strong>Gemini-3.1-Pro</strong></div></div>
    <div className="workflow-junction" aria-hidden="true">↓</div>
    <div className="workflow-script"><span>NARRATIVE / SHOT DESIGN</span><strong>Prompt / Video Script</strong><p>角色、场景、动作与镜头意图</p></div>
    <div className="workflow-junction" aria-hidden="true">↓</div>
    <div className="workflow-branches">
      <section><span>01 / IMAGE</span><h4>Visual References</h4><p>Nano-Banana-2<br />GPT-Image-1.5</p><small>角色与场景图像</small></section>
      <section><span>02 / 3D MODEL</span><h4>Spatial Exploration</h4><p>Meshy</p><small>项目记录中的 3D 探索分支</small></section>
      <section><span>03 / VIDEO</span><h4>Shot Generation</h4><p>Grok-Imagine-Video<br />Kling-v3-Pro<br />Seedance 2.0</p><small>镜头生成与视觉迭代</small></section>
    </div>
    <div className="workflow-output"><span>EDIT / ASSEMBLY</span><strong>Governed by the Protocol</strong></div>
    <figcaption>根据项目原始流程图整理。各工具为项目记录中的工具清单；3D 为探索分支，不代表每个镜头都经过 3D 制作。</figcaption>
  </figure>;
}
