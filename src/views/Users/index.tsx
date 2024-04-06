export default function Users(props: { theme: ColorTheme }) {
  return (
    <div
      className="content-container align-down-center"
      style={{ backgroundColor: props.theme.body }}
    >
      Users
    </div>
  );
}
