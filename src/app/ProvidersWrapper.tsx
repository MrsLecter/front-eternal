"use client";
import { Session } from "next-auth/core/types";
import { SessionProvider } from "next-auth/react";
import { FC } from "react";

interface IProviderWrapperProps {
  children: React.ReactNode;
  session: Session | null | undefined;
}

const ProvidersWrapper: FC<IProviderWrapperProps> = ({
  children,
  session,
}) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default ProvidersWrapper;
