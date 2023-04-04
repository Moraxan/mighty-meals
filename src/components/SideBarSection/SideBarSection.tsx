import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import { ReturnFilters } from "./Filters";
import "./SideBarSection.css";
import "./SedeBarButtons.css";

//@ts-ignore
export default function SideBarSection() {
  return (
    <Accordion>
      <AccordionItem />
    </Accordion>
  );
}

function AccordionItem() {
  return (
    <ul>
      {ReturnFilters().map((array) => (
        <li key={ReturnFilters().indexOf(array)}>
        <Accordion.Item eventKey={ReturnFilters().indexOf(array).toString()}>
          <Accordion.Header className="filter-section-header">
            {ArrayName(ReturnFilters().indexOf(array))}
          </Accordion.Header>
          <Accordion.Body>
            {array.map(item => <Button key={item} className="filter-buttons">{item.toLowerCase()}</Button>)}
          </Accordion.Body>
        </Accordion.Item>
        </li>
      ))}
    </ul>
  );
}

function ArrayName(arrIndex: number) {
  switch(arrIndex){
    case 0:
      return "meal types";
    case 1:
      return "cuisines";
    case 2:
      return "intolerances";
    case 3:
      return "diets";
    default:
      return "not found";
  }
}
