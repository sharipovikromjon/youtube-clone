// React Imports
import * as React from "react";
// MUI Imports
import Avatar from "@mui/material/Avatar";
import ButtonBase from "@mui/material/ButtonBase";
// Toastify Imports
import { Bounce, toast, ToastContainer } from "react-toastify";

const MAX_LOCALSTORAGE_SIZE = 5 * 1024 * 1024;
export default function UploadAvatars() {
  const [avatarSrc, setAvatarSrc] = React.useState(undefined);

  const handleAvatarChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > MAX_LOCALSTORAGE_SIZE) {
        toast.error(
          "The image is too large to be saved in your browser. Maximum allowed size is 5MB.",
          {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          }
        );
        return;
      }
      // Read the file as a data URL
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result;
        localStorage.setItem("avatar", base64Image); // Store in localStorage
        setAvatarSrc(base64Image);
      };
      reader.readAsDataURL(file);
    }
  };
  React.useEffect(() => {
    const storedAvatar = localStorage.getItem("avatar");
    if (storedAvatar) {
      setAvatarSrc(storedAvatar);
    }
  }, []);

  return (
    <>
      <ToastContainer />
      <ButtonBase
        component="label"
        role={undefined}
        tabIndex={-1} // prevent label from tab focus
        aria-label="Avatar image"
        sx={{
          borderRadius: "40px",
          "&:has(:focus-visible)": {
            outline: "2px solid",
            outlineOffset: "2px",
          },
        }}
      >
        <Avatar alt="Upload new avatar" src={avatarSrc} />
        <input
          type="file"
          accept="image/*"
          style={{
            border: 0,
            clip: "rect(0 0 0 0)",
            height: "1px",
            margin: "-1px",
            overflow: "hidden",
            padding: 0,
            position: "absolute",
            whiteSpace: "nowrap",
            width: "1px",
          }}
          onChange={handleAvatarChange}
        />
      </ButtonBase>
    </>
  );
}
