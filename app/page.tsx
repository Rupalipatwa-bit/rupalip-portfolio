import { Nav } from "@/components/nav";
import { Reveal, MetricsCounter } from "@/components/reveal";
import {
  site,
  metrics,
  specialties,
  journey,
  brings,
  jobs,
  caseStudies,
  toolkit,
  testimonials,
  writingPosts,
} from "@/lib/content";

export default function HomePage() {
  const year = new Date().getFullYear();

  return (
    <>
      <Nav />

      <header>
        <div className="wrap">
          <Reveal immediate>
            <div className="avail">
              <span className="dot" aria-hidden="true" />
              {site.availability}
            </div>
          </Reveal>
          <Reveal immediate delay="d1">
            <h1>
              I help frontier teams
              <br />
              hire the people who
              <br />
              build <em>what&apos;s next.</em>
            </h1>
          </Reveal>
          <Reveal immediate delay="d2">
            <p className="lede">
              Talent acquisition partner who designs and builds workforce teams
              from 0 → 1, pairing recruiting depth with workforce analytics.
              Focused on AI/ML talent, and on using AI in how I recruit, not
              just who I recruit.
            </p>
          </Reveal>
          <Reveal immediate delay="d3">
            <div className="hero-row">
              <a href="#contact" className="btn btn-primary">
                Let&apos;s talk <span className="arr">→</span>
              </a>
              <a
                href={site.resumePath}
                className="btn btn-ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download résumé
              </a>
            </div>
          </Reveal>
        </div>
      </header>

      <section id="about">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow">about</div>
          </Reveal>
          <div className="about-grid">
            <Reveal delay="d1">
              <p className="intro-lead">
                I design and build workforce teams from <b>0 → 1</b>, pairing
                deep talent acquisition with <b>workforce analytics</b>, with a
                focus on AI &amp; machine learning talent.
              </p>
              <div className="journey">
                {journey.map((beat) => (
                  <div className="beat" key={beat.num}>
                    <div className="step">
                      {beat.num} · <b>{beat.place}</b>
                    </div>
                    <p>{beat.text}</p>
                  </div>
                ))}
              </div>
              <div className="brings">
                <div className="blabel">{"// what i bring"}</div>
                {brings.map((item, idx) => (
                  <div className="row" key={idx}>
                    <span className="mk">›</span>
                    <span>
                      {item.parts.map((part, i) =>
                        typeof part === "string" ? (
                          part
                        ) : (
                          <b key={part.bold}>{part.bold}</b>
                        ),
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay="d2">
              <aside className="side-card">
                <h4>Specialties</h4>
                <p className="side-note">{"// what i work across"}</p>
                <div className="tag-list">
                  {specialties.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </aside>
            </Reveal>
          </div>

          <Reveal delay="d2">
            <div className="metrics">
              <div className="metrics-inner">
                {metrics.map((m) => (
                  <div className="metric" key={m.label}>
                    <MetricsCounter value={m.value} suffix={m.suffix} />
                    <div className="lbl">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="work">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow">experience</div>
          </Reveal>
          <Reveal delay="d1">
            <h2>Where I&apos;ve made an impact</h2>
          </Reveal>
          <Reveal delay="d2">
            <div className="timeline">
              {jobs.map((job) => (
                <div className="job" key={job.when}>
                  <div className="when">{job.when}</div>
                  <h3>{job.title}</h3>
                  <div className="co">{job.company}</div>
                  <ul>
                    {job.bullets.map((bullet) => (
                      <li key={bullet.slice(0, 40)}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="cases">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow">case_studies</div>
          </Reveal>
          <Reveal delay="d1">
            <h2>A few searches worth telling</h2>
          </Reveal>
          <div className="cases">
            {caseStudies.map((c, i) => (
              <Reveal key={c.title} delay={i % 2 === 0 ? "d1" : "d2"}>
                <article className="case">
                  <div className="kicker">{c.kicker}</div>
                  <h3>{c.title}</h3>
                  <p>{c.description}</p>
                  <div className="result">
                    <span>result →</span> {c.result}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="focus">
        <div className="wrap">
          <Reveal>
            <div className="focus">
              <div className="eyebrow">what i&apos;m working on</div>
              <h2>
                The best recruiters won&apos;t be replaced by AI. They&apos;ll
                be the ones who use it best.
              </h2>
              <p>
                I&apos;m exploring how AI changes technical recruiting from the
                inside: what to automate, what to keep human, and how to give
                candidates a faster, warmer experience without losing the
                judgment that makes a hire stick. It&apos;s the problem I want
                to keep solving.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="toolkit">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow">toolkit &amp; approach</div>
          </Reveal>
          <Reveal delay="d1">
            <h2>How I work</h2>
          </Reveal>
          <div className="tools">
            {toolkit.map((tool, i) => (
              <Reveal key={tool.title} delay={(["d1", "d2", "d3"] as const)[i]}>
                <div className="tool">
                  <h4>
                    <span className="ic">{tool.icon}</span>
                    {tool.title}
                  </h4>
                  <ul>
                    {tool.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="quotes">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow">in their words</div>
          </Reveal>
          <Reveal delay="d1">
            <h2>What partners say</h2>
          </Reveal>
          <div className="quotes">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i === 0 ? "d1" : "d2"}>
                <figure className="quote">
                  <div className="mark" aria-hidden="true">
                    &ldquo;
                  </div>
                  <blockquote>{t.quote}</blockquote>
                  <figcaption className="who">
                    <div className="pic">{t.initials}</div>
                    <div>
                      <b>{t.name}</b>
                      <small>{t.role}</small>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="writing">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow">writing</div>
          </Reveal>
          <Reveal delay="d1">
            <h2>Notes on talent &amp; AI</h2>
          </Reveal>
          <Reveal delay="d2">
            <p className="lede writing-lede">
              Thinking out loud about recruiting, hiring, and where AI fits. New
              posts coming soon.
            </p>
          </Reveal>
          <Reveal delay="d2">
            <div className="posts">
              {writingPosts.map((post) => (
                <div className="post" key={post.title}>
                  <span className="date">{post.date}</span>
                  <h3>{post.title}</h3>
                  <span className="soon">{post.status}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow">get in touch</div>
          </Reveal>
          <Reveal delay="d1">
            <h2>Building a team, or just want to talk talent?</h2>
          </Reveal>
          <Reveal delay="d2">
            <p className="lede">
              I&apos;m open to talent acquisition and recruiting roles, and
              always happy to trade notes with people hiring in AI and tech.
            </p>
          </Reveal>
          <Reveal delay="d3">
            <div className="hero-row contact-actions">
              <a href={`mailto:${site.email}`} className="btn btn-primary">
                Email me <span className="arr">→</span>
              </a>
            </div>
            <div className="socials">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a href={`mailto:${site.email}`}>Email</a>
              <a
                href={site.resumePath}
                target="_blank"
                rel="noopener noreferrer"
              >
                Résumé
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer>
        <div className="wrap">
          designed with care · <b>{site.name}</b> · © {year}
        </div>
      </footer>
    </>
  );
}
