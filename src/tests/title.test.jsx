import { render } from '@testing-library/react'
import App from '../App';

test('h1 should read Deploy to Render', () => {

  render(<App />);

  expect(document.getElementsByTagName('h1')[0].textContent).toBe('Deploy to Render');
})