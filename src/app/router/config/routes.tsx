import Main from '@/app/layouts/Main'
import { QuestionPageLazy } from '@/pages/questions'
import Spinner from '@/shared/ui/Spinner/Spinner'
import { Suspense } from 'react'

export const routes = [
  {
    element: <Main />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<Spinner />}>
            <QuestionPageLazy />
          </Suspense>
        ),
      },
      {
        path: 'question/:questionId',
        element: <h2>Заглушка</h2>,
      },
      {
        path: '*',
        element: <h1>Нет такой страницы!</h1>,
      },
    ],
  },
]
