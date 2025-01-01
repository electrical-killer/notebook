import { translate } from '@docusaurus/Translate'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { groupByProjects, projectTypeMap, projects } from '@site/src/data/projects/projects'
import { cn } from '@site/src/lib/utils'
import ShowcaseCard from './_components/ShowcaseCard'

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'

import { MagicContainer } from '@site/components/ui/magic-card'
import MyLayout from '@site/src/theme/MyLayout'
import { upperFirst } from '@site/src/lib/jsUtils'
import styles from './styles.module.css'

const TITLE = translate({
  id: 'theme.project.title',
  message: '项目展柜',
})

const DESCRIPTION = translate({
  id: 'theme.project.description',
  message: '不积跬步,无以至千里; 不积小流,无以成江海',
})

type ProjectState = {
  scrollTopPosition: number
  focusedElementId: string | undefined
}

export function prepareUserState(): ProjectState | undefined {
  if (ExecutionEnvironment.canUseDOM) {
    return {
      scrollTopPosition: window.scrollY,
      focusedElementId: document.activeElement?.id,
    }
  }

  return undefined
}

function ShowcaseHeader() {
  return (
    <section className="text-center">
      <h2>{TITLE}</h2>
      <p>{DESCRIPTION}</p>
      {/* <a
        className="button button--primary"
        href={GITHUB_URL}
        target="_blank"
        rel="noreferrer"
      >
        <Translate id="showcase.header.button">前往 Github 克隆项目</Translate>
      </a> */}
    </section>
  )
}

function ShowcaseCards() {
  const { i18n } = useDocusaurusContext()
  const lang = i18n.currentLocale

  if (projects.length === 0) {
    return (
      <section className="margin-top--lg margin-bottom--xl">
        <div className="padding-vert--md container text-center">
          <h2>No result</h2>
        </div>
      </section>
    )
  }

  return (
    <section className="margin-top--lg margin-bottom--xl">
      <>
        <div className="margin-top--lg container">
          <div className={cn('my-4', styles.showcaseFavoriteHeader)} />
          {Object.entries(groupByProjects).map(([key, value]) => {
            return (
              <div key={key}>
                <div className={cn('my-4', styles.showcaseFavoriteHeader)}>
                  <h3>{upperFirst(projectTypeMap[key])}</h3>
                  {/* <h3>{upperFirst(lang === 'en' ? key : projectTypeMap[key])}</h3> */}
                </div>
                <MagicContainer className={styles.showcaseList}>
                  {value.map(project => (
                    <ShowcaseCard key={project.title} project={project} />
                  ))}
                </MagicContainer>
              </div>
            )
          })}
          <MagicContainer />
        </div>
      </>
    </section>
  )
}

function Showcase(): JSX.Element {
  return (
    <MyLayout title={TITLE} description={DESCRIPTION} maxWidth={1280}>
      <main className="margin-vert--lg">
        <ShowcaseHeader />
        <ShowcaseCards />
      </main>
    </MyLayout>
  )
}

export default Showcase