// @ts-nocheck

import {
  Button,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import resetMap from "./reset-map";
import { BiNavigation } from "react-icons/bi";
import Navigation from "./Navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiZoomIn, FiZoomOut } from "react-icons/fi";
import { MdOutlineArrowBack } from "react-icons/md";
import { TbTools } from "react-icons/tb";
import { zoomIn, zoomOut } from "./zoom";
import { clsx } from "../utils/string";
import scss from "./Toolbar.module.scss";
import { useMapStore } from "../store/map-store";

const Toolbar = () => {
  const map = useMapStore.use.map();
  const toolDisc = useDisclosure();
  const [activeTool, setActiveTool] = useState<Tool>();
  const TOOLS: Tool[] = [
    {
      name: "Home",
      icon: <AiOutlineHome />,
      onClick: () =>
        resetMap({ map, shouldResetZoom: true, resetSidebarLayers: true }),
    },
    { name: "Navigation", icon: <BiNavigation />, render: <Navigation /> },
    { name: "Zoom In", icon: <FiZoomIn />, onClick: () => zoomIn(map) },
    { name: "Zoom Out", icon: <FiZoomOut />, onClick: () => zoomOut(map) },
  ];

  const handleToolClick = (tool: Tool) => {
    setActiveTool(tool);
    if (tool.render) {
      toolDisc.onOpen();
    } else if (tool.onClick) {
      tool.onClick();
    }
  };

  const closeTool = () => {
    setActiveTool(undefined);
    toolDisc.onClose();
  };

  const renderToolsList = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <ul className={clsx(scss.list, "list-unstyled")}>
        {TOOLS.map((tool) => (
          <li key={tool.name}>
            <Tooltip
              hasArrow
              bgColor={TOOLTIP.BG_COLOR}
              color={TOOLTIP.TEXT_COLOR}
              label={tool.name}
            >
              <div
                className={clsx(scss.tool, "rounded")}
                onClick={() => handleToolClick(tool)}
              >
                {tool.icon}
              </div>
            </Tooltip>
          </li>
        ))}
      </ul>
    </motion.div>
  );

  const renderToolContent = (
    <motion.div
      key={(toolDisc?.isOpen as any) && !!activeTool ? 1 : 2}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {!!activeTool?.render && activeTool.render}
    </motion.div>
  );

  return (
    <div className="position-absolute mt-3 ms-3" style={{ zIndex: 1 }}>
      <Popover
        isLazy
        placement="bottom-start"
        onClose={closeTool}
        autoFocus={false}
        closeOnBlur={false}
        closeOnEsc={false}
        returnFocusOnClose={false}
      >
        <PopoverTrigger>
          <Button
            colorScheme="facebook"
            bgColor="blue.900"
            leftIcon={<TbTools size={20} />}
          >
            Tools
          </Button>
        </PopoverTrigger>
        <PopoverContent
          minWidth="280px"
          width="min-content"
          maxWidth="600px"
          bg="#BCCCE3"
        >
          <PopoverArrow bg="#BCCCE3" />

          <PopoverHeader
            borderBottomColor="blackAlpha.400"
            className="d-flex align-items-center"
          >
            {!!activeTool ? (
              <>
                <IconButton
                  className="me-2"
                  size="xs"
                  bgColor="transparent"
                  _hover={{ bgColor: "blackAlpha.100" }}
                  color="blackAlpha.800"
                  aria-label="Go back to tools list"
                  onClick={closeTool}
                  icon={<MdOutlineArrowBack size={19} />}
                />
                <span>{activeTool.name}</span>
              </>
            ) : (
              <span>Tools</span>
            )}
          </PopoverHeader>
          <PopoverBody maxHeight="calc(84vh - 300px - 4.5rem)" overflowY="auto">
            {toolDisc.isOpen && !!activeTool
              ? renderToolContent
              : renderToolsList}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
};

const TOOLTIP = {
  BG_COLOR: "#f2f2f2",
  TEXT_COLOR: "#1a365d",
};

interface Tool {
  name: string;
  icon: React.JSX.Element;
  render?: React.JSX.Element;
  onClick?: Function;
}

export default Toolbar;
