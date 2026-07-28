"use client";

import {
  Modal as MantineModal,
  Drawer as MantineDrawer,
  type ModalProps as MantineModalProps,
  type DrawerProps as MantineDrawerProps,
} from "@mantine/core";

export type ModalProps = MantineModalProps;
export type DrawerProps = MantineDrawerProps;

export function Modal(props: ModalProps) {
  return <MantineModal {...props} />;
}

export function Drawer(props: DrawerProps) {
  return <MantineDrawer {...props} />;
}
