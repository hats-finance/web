import { useEffect } from 'react';
import './index.scss';

interface IProps {
  children: React.ReactNode
}

export default function Menu(props: IProps) {

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "initial";
    }
  }, []);

  return (
    <div className="menu-wrapper">
      {props.children}
    </div>
  )
}
