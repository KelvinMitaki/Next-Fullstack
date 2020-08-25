import React from "react";
import Link from "next/link";

const SettingsNav = () => {
  return (
    <React.Fragment>
      <Menu vertical>
        <Header icon="user" attached inverted color="grey" content="Profile" />
        <Link href="/settings/basics">
          <Menu.Item as="a">
            <a>Basics</a>
          </Menu.Item>
        </Link>
        <Link href="/settings/about">
          <Menu.Item as="a">
            <a>About Me</a>
          </Menu.Item>
        </Link>
        <Link href="/settings/photos">
          <Menu.Item as="a">
            <a>My Photos</a>
          </Menu.Item>
        </Link>
      </Menu>

      <Menu vertical>
        <Header
          icon="settings"
          attached
          inverted
          color="grey"
          content="Account"
        />
        <Link href="/settings/account">
          <Menu.Item as="a">
            <a>My Account</a>
          </Menu.Item>
        </Link>
      </Menu>
    </React.Fragment>
  );
};

export default SettingsNav;
