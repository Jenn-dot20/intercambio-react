import { Link } from 'react-router-dom';

export default function Button({ children, to, ...props }) {
  if (to) {
    return <Link to={to} {...props}>{children}</Link>;
  }
  return <button {...props}>{children}</button>;
}
