import { Menu, Image, Dropdown } from "semantic-ui-react";
import Link from "next/link";
import { connect } from "react-redux";

const SignedInMenu = ({
  onSignOutClick,
  photoURL,
  avatarUrl,
  displayName,
  uid
}) => {
  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src="/1.png" />
      <Dropdown pointing="top left" text="kelvin mitaki">
        <Dropdown.Menu>
          <Dropdown.Item text="Create Event" icon="plus">
            <Link href="/new/event">
              <a>Create Event</a>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item text="My Profile" icon="user">
            <Link href="/profile">
              <a>My Profile</a>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item text="Settings" icon="settings">
            <Link href="/settings/basics">
              <a>Settings</a>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item text="Sign Out" icon="power" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};
export default SignedInMenu;
