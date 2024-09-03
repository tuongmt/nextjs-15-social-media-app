"use client";

import ForYouFeed from "@/app/(main)/ForYouFeed";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import FollowingFeed from "@/app/(main)/FollowingFeed";

export default function PostTabs() {


  return (
    <Tabs defaultValue="for-you">
      <TabsList>
        <TabsTrigger value="for-you">For you</TabsTrigger>
        <TabsTrigger value="following">Following</TabsTrigger>
      </TabsList>
      <TabsContent value="for-you">
        <ForYouFeed />
      </TabsContent>
      <TabsContent value="following">
        <FollowingFeed />
      </TabsContent>
    </Tabs>
  );
}
