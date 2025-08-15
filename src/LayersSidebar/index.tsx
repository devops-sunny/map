// @ts-nocheck

import { Layer } from "ol/layer";
import BaseLayer from "ol/layer/Base";
import LayerGroup from "ol/layer/Group";
import { ChangeEvent, useEffect, useState } from "react";
import {
  StaticTreeDataProvider,
  TreeItem,
  TreeItemIndex,
} from "react-complex-tree";
import "react-complex-tree/lib/style-modern.css";
import { useMapStore } from "../store/map-store";
import { isLayerGroup } from "../utils/ol";
import { clsx } from "../utils/string";
import scss from "./LayersSidebar.module.scss";

const LayerMapSidebar = () => {
  const map = useMapStore.use.map();
  const selectedLayers = useMapStore.use.selectedLayers();
  const setSelectedLayers = useMapStore.use.setSelectedLayers();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerGroup, setDrawerGroup] = useState<LayerGroup>();
  const [treeDataProvider, setTreeDataProvider] =
    useState<StaticTreeDataProvider>();
  const [checkedLayers, setCheckedLayers] = useState<Record<string, boolean>>(
    {}
  );
  const [expandedAccordions, setExpandedAccordions] = useState<
    Record<string, boolean>
  >({});

  const handleLayerChange = (
    evt: ChangeEvent<HTMLInputElement>,
    layer: Layer
  ) => {
    layer.setVisible(evt.target.checked);
    layer.changed();
    if (evt.target.checked) {
      setSelectedLayers(selectedLayers.concat(layer));
    } else {
      const after = selectedLayers.filter(
        (selected) => layer.get("name") !== selected.get("name")
      );
      setSelectedLayers(after);
    }
    setCheckedLayers({
      ...checkedLayers,
      [layer.get("name")]: evt.target.checked,
    });
  };

  const layersCount = map.getAllLayers().length;
  useEffect(() => {
    const checked: Record<string, boolean> = {};
    map
      .getAllLayers()
      .filter((layer) => layer.getVisible())
      .forEach((layer) => {
        checked[layer.get("name")] = layer.getVisible();
      });
    setCheckedLayers(checked);
  }, [layersCount]);

  const showTooltip = (
    event: React.MouseEvent<HTMLButtonElement>,
    groupName: string
  ) => {
    const tooltip = document.createElement("div");
    tooltip.className = "custom-tooltip";
    tooltip.textContent = groupName;
    tooltip.style.cssText = `
      position: absolute;
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      z-index: 1000;
      pointer-events: none;
    `;
    document.body.appendChild(tooltip);

    const rect = event.currentTarget.getBoundingClientRect();
    tooltip.style.left = `${rect.left - tooltip.offsetWidth - 10}px`;
    tooltip.style.top = `${
      rect.top + rect.height / 2 - tooltip.offsetHeight / 2
    }px`;

    event.currentTarget.setAttribute(
      "data-tooltip",
      (tooltip.id = Date.now().toString())
    );
  };

  const hideTooltip = (event: React.MouseEvent<HTMLButtonElement>) => {
    const tooltipId = event.currentTarget.getAttribute("data-tooltip");
    if (tooltipId) {
      const tooltip = document.getElementById(tooltipId);
      if (tooltip) {
        tooltip.remove();
      }
      event.currentTarget.removeAttribute("data-tooltip");
    }
  };

  const openDrawerGroup = (group: LayerGroup) => {
    const items: Record<TreeItemIndex, TreeItem> = {
      root: makeTreeItem("root", true, undefined),
    };
    addItemToTree(group, "root", items);
    setTreeDataProvider(new StaticTreeDataProvider(items));
    setDrawerGroup(group);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setDrawerGroup(undefined);
  };

  const toggleAccordion = (groupName: string) => {
    setExpandedAccordions((prev) => ({
      ...prev,
      [groupName]: !prev[groupName],
    }));
  };

  if (map.getLayers().getLength() === 0) {
    return null;
  }

  return (
    <>
      <div
        className={clsx(
          scss["container"],
          "d-flex justify-content-end align-items-center"
        )}
      >
        <ul className="list-unstyled">
          {map
            .getLayers()
            .getArray()
            .filter(isLayerGroup)
            .map((group, groupIndex) => (
              <li
                key={groupIndex}
                className="mb-2"
                onClick={() => openDrawerGroup(group)}
              >
                <button
                  className={clsx(scss["btnRootGroup"], "rounded")}
                  onMouseEnter={(e) =>
                    showTooltip(e, group.get("name") as string)
                  }
                  onMouseLeave={hideTooltip}
                  title={group.get("name") as string}
                >
                  {/* {ICON_ROOT_GROUP[group.get("name")]} */}
                </button>
              </li>
            ))}
        </ul>
      </div>

      {isDrawerOpen && (
        <>
          <div
            className="drawer-overlay"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "transparent",
              pointerEvents: "none",
              zIndex: 1000,
            }}
          />
          <div
            className={clsx(scss["drawer"], "custom-drawer")}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              height: "100vh",
              width: "384px",
              backgroundColor: "white",
              boxShadow: "-4px 0 15px rgba(0, 0, 0, 0.1)",
              zIndex: 1001,
              pointerEvents: "all",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <button
              className={scss["drawerclosebutton"]}
              onClick={closeDrawer}
              style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                background: "none",
                border: "none",
                fontSize: "24px",
                cursor: "pointer",
                color: "black",
                zIndex: 1002,
              }}
            >
              ✕
            </button>

            <div
              className="drawer-header"
              style={{
                padding: "16px 24px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.28)",
                backgroundColor: "transparent",
              }}
            >
              <h4 style={{ margin: 0, fontSize: "18px", fontWeight: "600" }}>
                {drawerGroup?.get("name")}
              </h4>
            </div>

            <div
              className={scss["drawerbody"]}
              style={{
                flex: 1,
                padding: "16px 24px",
                overflow: "auto",
              }}
            >
              <div className="custom-accordion">
                {!!drawerGroup &&
                  drawerGroup
                    .getLayers()
                    .getArray()
                    .filter(isLayerGroup)
                    .map((group, groupIndex) => {
                      const groupName = group.get("name");
                      const isExpanded = expandedAccordions[groupName];

                      return (
                        <div
                          key={groupIndex}
                          className="accordion-item"
                          style={{ marginBottom: "8px" }}
                        >
                          <button
                            className="accordion-button"
                            onClick={() => toggleAccordion(groupName)}
                            style={{
                              width: "100%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              padding: "12px 16px",
                              background: "transparent",
                              border: "1px solid #e2e8f0",
                              borderRadius: "6px",
                              cursor: "pointer",
                              fontSize: "14px",
                              textAlign: "left",
                            }}
                          >
                            <span>{groupName}</span>
                            <span
                              style={{
                                transform: isExpanded
                                  ? "rotate(180deg)"
                                  : "rotate(0deg)",
                                transition: "transform 0.2s ease",
                              }}
                            >
                              ▼
                            </span>
                          </button>

                          {isExpanded && (
                            <div
                              className="accordion-panel"
                              style={{
                                padding: "16px",
                                borderLeft: "1px solid #e2e8f0",
                                borderRight: "1px solid #e2e8f0",
                                borderBottom: "1px solid #e2e8f0",
                                borderTop: "none",
                                borderRadius: "0 0 6px 6px",
                                marginTop: "-1px",
                              }}
                            >
                              {group
                                .getLayers()
                                .getArray()
                                .map((layer, layerIndex) => (
                                  <div
                                    key={layerIndex}
                                    className="d-flex align-items-center"
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      marginBottom: "8px",
                                    }}
                                  >
                                    <input
                                      style={{
                                        accentColor: "#007780",
                                        marginRight: "8px",
                                      }}
                                      type="checkbox"
                                      autoComplete="off"
                                      autoCorrect="off"
                                      checked={Boolean(
                                        checkedLayers[layer.get("name")]
                                      )}
                                      onChange={(evt) =>
                                        handleLayerChange(evt, layer as any)
                                      }
                                    />
                                    <span style={{ fontSize: "14px" }}>
                                      {layer.get("name")}
                                    </span>
                                  </div>
                                ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export const makeTreeItem = (
  index: string,
  isFolder: boolean,
  data: any
): TreeItem => ({
  index,
  isFolder,
  data,
  children: [],
  canMove: false,
  canRename: false,
});

export const addItemToTree = (
  layer: BaseLayer,
  index: string,
  items: Record<TreeItemIndex, TreeItem>
) => {
  if (layer instanceof LayerGroup) {
    const group = layer;
    group
      .getLayers()
      .getArray()
      .forEach((childLayer) => {
        const layerName = childLayer.get("name");
        items[index].children?.push(layerName);
        items[layerName] = makeTreeItem(
          layerName,
          childLayer instanceof LayerGroup,
          layerName
        );
        addItemToTree(childLayer, layerName, items);
      });
  } else {
    const layerName = layer.get("name");
    items[layerName] = makeTreeItem(layerName, false, layer);
  }
};

export default LayerMapSidebar;
