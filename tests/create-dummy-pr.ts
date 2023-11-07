import {PR} from '../src/types/pull-request'

interface Options {
  sha?: string
  draft?: boolean
}

export default function createDummyPR(id: number, options: Options): PR {
  return {
    id,
    draft: options.draft ?? false,
    head: {
      sha: options.sha ?? ''
    } as PR['head']
  } as PR
}
