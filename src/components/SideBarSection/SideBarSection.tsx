import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import {ReturnFilter} from './Filters';
import './SideBarSection.css'

    //@ts-ignore
    export default function SideBarSection({name, argument}) {

        const tmpArray = ReturnFilter(argument);
        return (
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header className="filter-section-header">{name}</Accordion.Header>
              <Accordion.Body>

              </Accordion.Body>
            </Accordion.Item>
            {/* <Accordion.Item eventKey="1">
              <Accordion.Header>cuisines</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item> */}
          </Accordion>
        );
      }
    