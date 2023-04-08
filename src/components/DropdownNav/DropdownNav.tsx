import { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import burger from "../../images/burger.png";
import "./DropdownNav.css";

export default function DropdownNav() {
    const matches = useMediaQuery('screen and (max-width: 900px) and (max-height: 450px), screen and (max-width: 450px) and (max-height: 900px)')

  return (
    <Dropdown align="end" drop={matches ? "up" : "down"}>
      <Dropdown.Toggle bsPrefix='dropdown' className="burger-button" variant="danger" id="dropdown-basic">
      <img className="burger-logo" alt="burger-menu" src={burger} />
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-text">
        <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

function useMediaQuery(query: string): boolean {
    const getMatches = (query: string): boolean => {
      // Prevents SSR issues
      if (typeof window !== 'undefined') {
        return window.matchMedia(query).matches
      }
      return false
    }
  
    const [matches, setMatches] = useState<boolean>(getMatches(query))
  
    function handleChange() {
      setMatches(getMatches(query))
    }
  
    useEffect(() => {
      const matchMedia = window.matchMedia(query)
  
      // Triggered at the first client-side load and if query changes
      handleChange()
  
      // Listen matchMedia
      if (matchMedia.addListener) {
        matchMedia.addListener(handleChange)
      } else {
        matchMedia.addEventListener('change', handleChange)
      }
  
      return () => {
        if (matchMedia.removeListener) {
          matchMedia.removeListener(handleChange)
        } else {
          matchMedia.removeEventListener('change', handleChange)
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])
  
    return matches
  }
  