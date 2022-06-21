<<<<<<< Updated upstream
import { render, screen } from '@testing-library/react'
import { ActiveLink } from '.'

jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
})

describe('ActiveLink component', () => {

    it('renders correctly', () => {
      render(
        <ActiveLink href="/" activeClassName='active'>
          <a>Home</a>
        </ActiveLink>
      )

        expect(screen.getByText('Home')).toBeInTheDocument() //test de texto "home" vai ser encontrado
    })

    it('adds active class if the link as currently active', () => {
      render(
        <ActiveLink href="/" activeClassName='active'>
          <a>Home</a>
        </ActiveLink>
      )

      expect(screen.getByText('Home')).toHaveClass('active')
    })
})
=======
import { render } from '@testing-library/react'
import { ActiveLink } from '.'

test('active link renders corrently', () => {
  const { debug } = render(
    <ActiveLink href="/" activeClassName="active">
      <a></a>
    </ActiveLink>
  )
  debug()
})
>>>>>>> Stashed changes
