type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params

  const isNotesPost = slug === 'notes-from-the-paper-reading-circle'
  const title = isNotesPost ? 'Notes from the Paper Reading Circle' : 'Fine-tuning Small Language Models'

  return (
    <>
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-12">
          <div className="text-sm mb-4">
            <a href="/blog" className="hover:text-fair-brand">Blog</a>
            <span className="mx-2 text-fair-ghost">/</span>
            <span className="text-fair-text/70">Tutorials</span>
          </div>
          <h1 className="text-6xl font-black tracking-tighter">{title}</h1>
          <div className="mt-8 flex items-center">
            <img src="https://placehold.co/50x50/E8E6E1/2E2E2E?text=A" alt="Author" className="w-12 h-12 object-cover filter grayscale" />
            <div className="ml-4">
              <p className="font-bold">Arjun M.</p>
              <p className="text-sm text-fair-text/70">Apr 10, 2026 · 8 min read</p>
            </div>
          </div>
        </div>
      </section>

      <article className="pb-24">
        <div className="max-w-7xl mx-auto px-12 grid md:grid-cols-12 gap-16">
          <div className="md:col-start-4 md:col-span-7">
            <div className="max-w-none">
              <p className="leading-[1.8]">
                Fine-tuning large language models (LLMs) has traditionally been a resource-intensive task, often requiring multiple high-end GPUs. However, recent advancements in parameter-efficient fine-tuning (PEFT) techniques, such as QLoRA, have made it possible to fine-tune smaller, yet powerful, models on consumer-grade hardware. This guide provides a practical walkthrough for fine-tuning models like Llama 3 8B and Phi-3 on a single GPU.
              </p>

              <h2 className="text-[1.875rem] font-black tracking-tighter mt-8 mb-4">1. Setting Up the Environment</h2>
              <p className="leading-[1.8]">
                First, you'll need a Python environment with the necessary libraries. We recommend using a virtual environment. The key libraries are transformers, peft, bitsandbytes for quantization, and accelerate.
              </p>

              <div className="relative mt-6">
                <div className="absolute top-2 right-2 bg-fair-brand text-white uppercase text-xs font-bold px-2 py-1 text-[10px]">PYTHON</div>
                <pre className="bg-fair-dark text-fair-background p-6 overflow-x-auto"><code>pip install transformers peft bitsandbytes accelerate torch</code></pre>
              </div>

              <h2 className="text-[1.875rem] font-black tracking-tighter mt-8 mb-4">2. Data Preparation</h2>
              <p className="leading-[1.8]">
                Your dataset is the most critical component. For instruction fine-tuning, your data should be in a structured format, typically a list of dictionaries, where each dictionary contains a key for the instruction, input (optional), and output.
              </p>

              <blockquote className="border-l-4 border-fair-brand pl-4 font-semibold text-fair-text mt-6">
                "The quality of your fine-tuning data directly determines the quality of your model. Garbage in, garbage out is more true than ever in the age of LLMs."
              </blockquote>

              <h2 className="text-[1.875rem] font-black tracking-tighter mt-8 mb-4">3. Loading the Model and Tokenizer</h2>
              <p className="leading-[1.8]">
                We'll use the transformers library to load a pre-trained model and its tokenizer. We'll also configure bitsandbytes to load the model in 4-bit precision (NF4), which significantly reduces memory usage.
              </p>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="sticky top-28 text-center">
              <img src="https://placehold.co/100x100/2E2E2E/FAFAFA?text=A" alt="Author" className="w-24 h-24 object-cover filter grayscale hover:grayscale-0 mx-auto" />
              <p className="mt-4 font-bold">Arjun M.</p>
              <p className="text-sm text-fair-text/70">ML Engineer @ FAIR</p>
              <a href="#" className="mt-4 inline-block bg-fair-brand text-white uppercase font-bold text-xs px-6 py-3 w-full border border-transparent hover:bg-fair-surface hover:text-fair-text hover:border-fair-text">View Profile</a>
            </div>
          </div>
        </div>
      </article>

      <section className="py-12 bg-fair-surface">
        <div className="max-w-7xl mx-auto px-12 flex justify-between">
          <a href="#" className="flex items-center group">
            <span className="material-symbols-outlined text-3xl mr-4">arrow_back</span>
            <div>
              <p className="text-sm uppercase tracking-wider text-fair-text/70">Previous Post</p>
              <p className="text-lg font-bold group-hover:text-fair-brand">The State of AI in Pune</p>
            </div>
          </a>
          <a href="#" className="flex items-center text-right group">
            <div>
              <p className="text-sm uppercase tracking-wider text-fair-text/70">Next Post</p>
              <p className="text-lg font-bold group-hover:text-fair-brand">Notes from the Paper Reading Circle</p>
            </div>
            <span className="material-symbols-outlined text-3xl ml-4">arrow_forward</span>
          </a>
        </div>
      </section>
    </>
  )
}
