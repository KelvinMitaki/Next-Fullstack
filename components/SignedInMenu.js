import { Menu, Image, Dropdown, Icon } from "semantic-ui-react";
import Link from "next/link";
import { connect } from "react-redux";
import { logoutUser } from "../redux/actions";

const SignedInMenu = ({
  onSignOutClick,
  photoURL,
  avatarUrl,
  displayName,
  uid,
  user,
  logoutUser
}) => {
  const {
    user: { firstName, lastName }
  } = user;
  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src="/1.png" />
      <Dropdown pointing="top left" text={`${firstName} ${lastName}`}>
        <Dropdown.Menu>
          <Dropdown.Item>
            <Icon name="plus" />
            <Link href="/new/event">
              <a>
                <span className="text">Create Event</span>
              </a>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Icon name="user" />
            <Link href="/profile">
              <a>
                <span className="text">My Profile</span>
              </a>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Icon name="settings" />
            <Link href="/settings/basics">
              <a>
                <span className="text">Settings</span>
              </a>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item
            text="Sign Out"
            icon="power"
            onClick={() => logoutUser()}
          />
        </Dropdown.Menu>
      </Dropdown>
      <style jsx>{`
        .text {
          color: black;
        }
      `}</style>
    </Menu.Item>
  );
};
export default connect(null, { logoutUser })(SignedInMenu);
