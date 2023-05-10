import { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import ModalSettings from '../ModalSettings/ModalSettings';
import ModalCSS from '../ModalCSS/ModalCSS';
import burger from "../../images/burger.png";
import { useDeveloperModeStore } from "../../components/Stores/developerMode";
import "./DropdownNav.css";
import { Link } from "react-router-dom";


// Put this as its own component due to half-comlicated code to monitor screensize and upon that change state if it matches below variable matches.
// Function is called useMediaQuery.
export default function DropdownNav() {
    //@ts-ignore
    const devMode: boolean = useDeveloperModeStore((state) => state.devMode);

    const matches = useMediaQuery('screen and (max-width: 900px) and (max-height: 450px), screen and (max-width: 450px) and (max-height: 900px)')
    const [showSettings, setShowSettings] = useState(false);
    const [showCSS, setShowCSS] = useState(false);

    const handleClickSettings = () => {
      setShowSettings(true);
    }
    const handleClickCSS = () => {
      setShowCSS(true);
    }

  return (
    <>
    <Dropdown align="end" drop={matches ? "up" : "down"}>
      <Dropdown.Toggle bsPrefix='dropdown' className="burger-button" variant="danger" id="dropdown-basic">
      <img className="burger-logo" alt="burger-menu" src={burger} />
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-text">
        <Link className="dropdown-item" to="/profilepage" style={{textDecoration: "none", color: "black"}}>Profile</Link>
        <Dropdown.Item onClick={handleClickSettings}>Settings</Dropdown.Item>
        {devMode && <Dropdown.Item onClick={handleClickCSS}>CSS Guidelines/Help</Dropdown.Item>}
      </Dropdown.Menu>
    </Dropdown>
    {showSettings && <ModalSettings setShowSettings={setShowSettings} />}
    {showCSS && <ModalCSS setShowCSS={setShowCSS} />}
    </>
  );
}

export function useMediaQuery(query: string): boolean {
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
  