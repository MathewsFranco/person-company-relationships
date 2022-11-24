import { Link } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <Link to='createPerson'>Create person</Link>
      <Link to='companies'>Companies</Link>
      <Link to='peopleWithNoCompany'>People with no company</Link>
    </>
  );
}
