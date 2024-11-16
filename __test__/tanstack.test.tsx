import React from "react";
import { createBrowserHistory, createRootRoute, createRoute, createRouter, RouterHistory, RouterProvider } from "@tanstack/react-router";

import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


import { MoveLink } from "../src/components/SubmitLink"
import { Route as SampleRouteImport } from "../src/routes/sample/"
import { Route as SampleTestRouteImport } from "../src/routes/sample/test/test"
const user = userEvent.setup()

describe("tastack.test", () => {
    it("レンダリングに失敗するはず", async () => {
        const rootRoute = createRootRoute()
        const baseRoute = createRoute({
            getParentRoute: () => rootRoute,
            path: '/',
            component: () => <MoveLink />
        })

        const SampleRoute = SampleRouteImport.update({
            path: '/sample',
            getParentRoute: () => rootRoute,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any)

        const SampleTestRoute = SampleTestRouteImport.update({
            path: '/sample/test',
            getParentRoute: () => rootRoute,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any)

        const routeTree = rootRoute
            ._addFileChildren({
                baseRoute: baseRoute,
                SampleRoute: SampleRoute,
                SampleTestRoute: SampleTestRoute,
            })

        const router = createRouter({ routeTree })

        render(<RouterProvider router={router} />)
        // const Links = screen.getAllByRole("link");
        // // console.log(Links)

        // const Link = Links[1];
        const Link = screen.getByText("/sample/test");
        await user.click(Link)

        expect(screen.getByText("Hello /sample/test!")).toBeDefined()
        expect(1).toBe(1)
    })
})