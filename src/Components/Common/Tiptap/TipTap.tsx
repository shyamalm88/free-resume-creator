import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Focus from "@tiptap/extension-focus";
import Placeholder from "@tiptap/extension-placeholder";
import { Button, ButtonGroup, ClickAwayListener, Stack } from "@mui/material";
import FormatBoldOutlinedIcon from "@mui/icons-material/FormatBoldOutlined";
import FormatItalicOutlinedIcon from "@mui/icons-material/FormatItalicOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import { ComponentInputProps } from "../../../types";
import he from "he";

const MenuBar = ({ editor, editable }: any) => {
  if (!editor) {
    return null;
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        {editable && (
          <Stack
            direction="row"
            alignContent="center"
            flexWrap="wrap"
            spacing={0.5}
            useFlexGap
          >
            <ButtonGroup
              size="small"
              disableElevation
              variant="outlined"
              color="inherit"
            >
              <Button
                size="small"
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={editor.isActive("bold") ? "is-active" : ""}
              >
                <FormatBoldOutlinedIcon fontSize="small" />
              </Button>
              <Button
                size="small"
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={editor.isActive("italic") ? "is-active" : ""}
              >
                <FormatItalicOutlinedIcon fontSize="small" />
              </Button>
              <Button
                size="small"
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive("bulletList") ? "is-active" : ""}
              >
                <FormatListBulletedOutlinedIcon />
              </Button>
            </ButtonGroup>
          </Stack>
        )}
      </div>
    </>
  );
};

export default function Editor({
  placeHolder,
  handleChange,
  handleEditorClick,
  handleEditorBlur,
  editable,
  dataContext,
  shouldUpdate,
}: ComponentInputProps) {
  const editor = useEditor(
    {
      extensions: [
        StarterKit,
        Focus.configure({
          className: "has-focus",
          mode: "all",
        }),

        Placeholder.configure({
          placeholder: placeHolder,
        }),
      ],
      autofocus: false,
      content: he.decode(dataContext),
      onUpdate: handleChange,
    },
    [shouldUpdate]
  );

  React.useEffect(() => {
    if (dataContext) {
      // editor?.commands.setContent(he.decode(dataContext));
    }
    // editor?.commands.setContent(dataContext ? he.decode(dataContext) : "");
  }, [dataContext]);

  return (
    <ClickAwayListener onClickAway={handleEditorBlur} mouseEvent="onMouseDown">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <MenuBar editor={editor} editable={editable} />
        <EditorContent
          editor={editor}
          style={{
            minHeight: "100px",
            overflow: "auto",
            border: "1px solid #ccc",
          }}
          onClick={handleEditorClick}
        />
      </div>
    </ClickAwayListener>
  );
}
