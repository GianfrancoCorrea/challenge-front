import { useEffect, ReactNode } from "react";
import { SidebarContainer, CloseButton } from './Sidebar.styled';

interface SidebarProps {
    isOpen: boolean;
	closeSidebar: () => void;
	children?: ReactNode;
}

const Sidebar = ({ isOpen, closeSidebar, children }: SidebarProps) => {

	// Close the sidebar when escape key is pressed
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent): void => {
		  if (event.key === 'Escape') {
			closeSidebar()
		  }
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => {
		  document.removeEventListener('keydown', handleKeyDown);
		};
	  }, [closeSidebar]);

    return (
        <SidebarContainer $isSidebarOpen={isOpen} className="sidebar" >
			<CloseButton onClick={closeSidebar}>&times;</CloseButton>
			{children}
        </SidebarContainer>
    );
};

export default Sidebar;
