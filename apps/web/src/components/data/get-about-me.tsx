"use client";

import { ComponentRequestorOnlyVisualsProps } from "@/shared/common/requestors.common";
import { AboutMeData } from "@/shared/entities/about-me-entity";
import { Requestor } from "../requestors/requestor";

interface GetAboutMeProps
  extends ComponentRequestorOnlyVisualsProps<AboutMeData> {}

const REQUEST_URL = "/api/user/me/info";

async function getAboutMe(endpoint: string): Promise<AboutMeData> {
  const response = await fetch(endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export function GetAboutMe(props: Readonly<GetAboutMeProps>) {
  const { component, errorComponent, loadingComponent } = props;

  return (
    <Requestor<AboutMeData>
      apiKey={REQUEST_URL}
      promise={getAboutMe}
      component={component}
      errorComponent={errorComponent}
      loadingComponent={loadingComponent}
    />
  );
}
