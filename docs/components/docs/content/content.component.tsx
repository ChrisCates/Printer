import { DocEnum } from 'redux/slice/slice.docs'
import Components from '../static/component'
import GettingStarted from '../static/getting.started'
import NewProject from '../static/new.project'
import Pages from '../static/pages'
import Structure from '../static/structure'
import Apis from '../static/apis'
import { ContentStyle } from './content.style'
import Slices from '../static/slices'
import Prisma from '../static/prisma'
import Types from '../static/types'
import Injectables from '../static/injectables'
import Overwrites from '../static/overwrites'
import Themes from '../static/themes'

export interface ContentI {
  selected: DocEnum
}

export function ContentComponent({ selected }: ContentI) {
  return (
    <ContentStyle>
      {selected === DocEnum.GettingStarted ? <GettingStarted /> : null}
      {selected === DocEnum.Structure ? <Structure /> : null}
      {selected === DocEnum.New ? <NewProject /> : null}
      {selected === DocEnum.Components ? <Components /> : null}
      {selected === DocEnum.Pages ? <Pages /> : null}
      {selected === DocEnum.Api ? <Apis /> : null}
      {selected === DocEnum.Slices ? <Slices /> : null}
      {selected === DocEnum.Prisma ? <Prisma /> : null}

      {selected === DocEnum.Types ? <Types /> : null}
      {selected === DocEnum.Injectables ? <Injectables /> : null}
      {selected === DocEnum.Overwrites ? <Overwrites /> : null}
      {selected === DocEnum.Themes ? <Themes /> : null}
    </ContentStyle>
  )
}
