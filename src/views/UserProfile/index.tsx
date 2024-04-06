export default function UserProfile(props: { theme: ColorTheme }) {
  return (
    <div
      className="content-container align-down-center"
      style={{ backgroundColor: props.theme.body }}
    >
      UserProfile
    </div>
  );
}
