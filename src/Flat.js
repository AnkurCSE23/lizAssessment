import * as React from "react";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { useState } from "react";

export default function Flat() {
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const [hoveredButton, setHoveredButton] = React.useState(null);

  const handleOption1Click = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleOption2Click = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleOption3Click = (event) => {
    setAnchorEl3(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const handleClose3 = () => {
    setAnchorEl3(null);
  };
  const handleMouseEnter = (buttonName) => {
    setHoveredButton(buttonName);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  return (
    <>
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div style={{margin: '10px'}}>
          <Button variant="contained" {...bindTrigger(popupState)} style={{ margin: "5px" }}>
            Research
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right", // Aligns the popover to the right
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left", // Aligns the popover to the left of the anchor
            }}
          >
            <div>
              <Button variant="contained" onClick={handleOption1Click} style={{ margin: "5px" }}>
                Enternal
              </Button>
              <Button variant="contained" onClick={handleOption2Click} style={{ margin: "5px" }}>
                Internal
              </Button>
            </div>
          </Popover>
          <Popover
            open={Boolean(anchorEl1)}
            anchorEl={anchorEl1}
            onClose={handleClose1}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right", // Aligns the popover to the right
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left", // Aligns the popover to the left of the anchor
            }}
          >
            <div style={{ gap: '8px' }}>
              <Button variant="contained" onClick={handleOption3Click} style={{ margin: "5px" }}>
                B2C
              </Button>
              <Button variant="contained" onClick={handleOption3Click} style={{ margin: "5px" }}>
                B2C
              </Button>
            </div>
          </Popover>
          <Popover
            open={Boolean(anchorEl2)}
            anchorEl={anchorEl2}
            onClose={handleClose2}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right", // Aligns the popover to the right
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left", // Aligns the popover to the left of the anchor
            }}
          >
            <div style={{ gap: '8px' }}>
              <Button variant="contained" onClick={handleOption3Click} style={{ margin: "5px" }}>
                B2C
              </Button>
              <Button variant="contained" onClick={handleOption3Click} style={{ margin: "5px" }}>
                B2C
              </Button>
            </div>
          </Popover>

          <Popover
            open={Boolean(anchorEl3)}
            anchorEl={anchorEl3}
            onClose={handleClose3}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right", // Aligns the popover to the right
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left", // Aligns the popover to the left of the anchor
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '8px' }}>
              <Button
                variant="contained"
                onMouseEnter={() => handleMouseEnter("Online")}
                onMouseLeave={handleMouseLeave}
                style={{ margin: "5px" }}
              >
                Online
              </Button>


              <Button
                variant="contained"
                onMouseEnter={() => handleMouseEnter("Interview")}
                onMouseLeave={handleMouseLeave}
                style={{ margin: "5px" }}
              >
                Interview
              </Button>


              <Button
                variant="contained"
                onMouseEnter={() => handleMouseEnter("Public Data")}
                onMouseLeave={handleMouseLeave}
                style={{ margin: "5px" }}
              >
                Public Data
              </Button>


              <Button
                variant="contained"
                onMouseEnter={() => handleMouseEnter("Health")}
                onMouseLeave={handleMouseLeave}
                style={{ margin: "5px" }}
              >
                Health
              </Button>

            </div>


          </Popover>
          <div style={{ minHeight: "100px", width: "300px", position: 'absolute', right: '50px', top: '20%' }}>
            {hoveredButton === "Health" && (
              <div style={{ position: "absolute", left: "0", top: "0", fontWeight: '500' }}>
                Text to display when hovering over Health button
              </div>
            )}
            {hoveredButton === "Online" && (
              <div style={{ position: "absolute", left: "0", top: "0", fontWeight: '500' }}>
                Text to display when hovering over Online button
              </div>
            )}

            {hoveredButton === "Interview" && (
              <div style={{ position: "absolute", left: "0", top: "0", fontWeight: '500' }}>
                Text to display when hovering over Interview button
              </div>
            )}

            {hoveredButton === "Public Data" && (
              <div style={{ position: "absolute", left: "0", top: "0", fontWeight: '500' }}>
                Text to display when hovering over Public Data button
              </div>
            )}
          </div>
        </div>
      )}
    </PopupState>



<PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div style={{margin: '10px'}}>
          <Button variant="contained" {...bindTrigger(popupState)} style={{ margin: "5px" }}>
            Planning
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right", // Aligns the popover to the right
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left", // Aligns the popover to the left of the anchor
            }}
          >
            <div>
              <Button variant="contained" style={{ margin: "5px" }}>
                PRD
              </Button>
              <Button variant="contained" style={{ margin: "5px" }}>
                Specs
              </Button>
            </div>
          </Popover>
          
        </div>
      )}
    </PopupState>
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div style={{margin: '10px'}}>
          <Button variant="contained" {...bindTrigger(popupState)} style={{ margin: "5px" }}>
            Designing
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right", // Aligns the popover to the right
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left", // Aligns the popover to the left of the anchor
            }}
          >
            <div>
              <Button variant="contained" style={{ margin: "5px" }}>
                Hardware
              </Button>
              <Button variant="contained"  style={{ margin: "5px" }}>
                Software
              </Button>
            </div>
          </Popover>
          
        </div>
      )}
    </PopupState>

    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div style={{margin: '10px'}}>
          <Button variant="contained" {...bindTrigger(popupState)} style={{ margin: "5px" }}>
            Manufacturing
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right", // Aligns the popover to the right
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left", // Aligns the popover to the left of the anchor
            }}
          >
            <div>
              <Button variant="contained" style={{ margin: "5px" }}>
                Material
              </Button>
              <Button variant="contained" style={{ margin: "5px" }}>
                Production
              </Button>
            </div>
          </Popover>
          
        </div>
      )}
    </PopupState>
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div style={{margin: '10px'}}>
          <Button variant="contained" {...bindTrigger(popupState)} style={{ margin: "5px" }}>
            Sales/Marketing
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right", // Aligns the popover to the right
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left", // Aligns the popover to the left of the anchor
            }}
          >
            <div>
              <Button variant="contained" style={{ margin: "5px" }}>
                Online
              </Button>
              <Button variant="contained" style={{ margin: "5px" }}>
                Dealership
              </Button>
            </div>
          </Popover>
          
        </div>
      )}
    </PopupState>


   {/*  
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div style={{margin: '10px'}}>
          <Button variant="contained" {...bindTrigger(popupState)} style={{ margin: "5px" }}>
            Planning
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right", // Aligns the popover to the right
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left", // Aligns the popover to the left of the anchor
            }}
          >
            <div>
              <Button variant="contained" style={{ margin: "5px" }}>
                PRD
              </Button>
              <Button variant="contained" style={{ margin: "5px" }}>
                Specs
              </Button>
            </div>
          </Popover>
          <Popover
            open={Boolean(anchorEl1)}
            anchorEl={anchorEl1}
            onClose={handleClose1}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right", // Aligns the popover to the right
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left", // Aligns the popover to the left of the anchor
            }}
          >
           </Popover>
        </div>
      )}
    </PopupState>
    

    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div style={{margin: '10px'}}>
          <Button variant="contained" {...bindTrigger(popupState)} style={{ margin: "5px" }}>
            Designing
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right", // Aligns the popover to the right
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left", // Aligns the popover to the left of the anchor
            }}
          >
            <div>
              <Button variant="contained" onClick={handleOption1Click} style={{ margin: "5px" }}>
                Hardware
              </Button>
              <Button variant="contained" onClick={handleOption2Click} style={{ margin: "5px" }}>
                Software
              </Button>
            </div>
          </Popover>
          <Popover
            open={Boolean(anchorEl1)}
            anchorEl={anchorEl1}
            onClose={handleClose1}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right", // Aligns the popover to the right
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left", // Aligns the popover to the left of the anchor
            }}
          >
           </Popover>
        </div>
      )}
    </PopupState>

    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div style={{margin: '10px'}}>
          <Button variant="contained" {...bindTrigger(popupState)} style={{ margin: "5px" }}>
            Manufacturing
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right", // Aligns the popover to the right
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left", // Aligns the popover to the left of the anchor
            }}
          >
            <div>
              <Button variant="contained" onClick={handleOption1Click} style={{ margin: "5px" }}>
                Material
              </Button>
              <Button variant="contained" onClick={handleOption2Click} style={{ margin: "5px" }}>
                Production
              </Button>
            </div>
          </Popover>
          <Popover
            open={Boolean(anchorEl1)}
            anchorEl={anchorEl1}
            onClose={handleClose1}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right", // Aligns the popover to the right
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left", // Aligns the popover to the left of the anchor
            }}
          >
           </Popover>
        </div>
      )}
    </PopupState>

    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div style={{margin: '10px'}}>
          <Button variant="contained" {...bindTrigger(popupState)} style={{ margin: "5px" }}>
            Sales/Marketing
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right", // Aligns the popover to the right
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left", // Aligns the popover to the left of the anchor
            }}
          >
            <div>
              <Button variant="contained" onClick={handleOption1Click} style={{ margin: "5px" }}>
                Online
              </Button>
              <Button variant="contained" onClick={handleOption2Click} style={{ margin: "5px" }}>
                Dealership
              </Button>
            </div>
          </Popover>
          <Popover
            open={Boolean(anchorEl1)}
            anchorEl={anchorEl1}
            onClose={handleClose1}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right", // Aligns the popover to the right
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left", // Aligns the popover to the left of the anchor
            }}
          >
           </Popover>
        </div>
      )}
    </PopupState> */}
    </>
  );
}