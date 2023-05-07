import { useEffect, ReactNode } from "react";
import { SidebarContainer } from './Sidebar.styled';

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
        <SidebarContainer $isSidebarOpen={isOpen}>
			{children}
        </SidebarContainer>
    );
};

export default Sidebar;
