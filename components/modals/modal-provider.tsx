"use client";

import { useEffect, useState } from "react";
import { CreateServerModal } from "./create-server-modal";
import { InviteModal } from "./invite-modal";
import { EditServerModal } from "./edit-server-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <CreateServerModal />
      <InviteModal />
      <EditServerModal />
    </>
  );
};
