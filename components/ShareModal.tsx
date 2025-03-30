"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useSelf } from "@liveblocks/react/suspense";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import UserTypeSelector from "./UserTypeSelector";
import Collaborator from "./Collaborator";
import { updateDocumentAccess } from "@/lib/actions/room.actions";

const ShareModal = ({
  roomId,
  collaborators,
  creatorId,
  currentUserType,
}: ShareDocumentDialogProps) => {
  const user = useSelf();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState<UserType>("viewer");

  const shareDocumentHandler = async () => {
    setLoading(true);
        await updateDocumentAccess({
          roomId,
          email,
          userType: userType as UserType,
          updatedBy: user.info,
        });
        setLoading(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button
          className="gradient-blue flex h-9 gap-1 px-4 mx-2"
          disabled={currentUserType !== "editor"}
        >
          <Image
            src="/assets/icons/share.svg"
            alt="share"
            width={20}
            height={20}
            className="min-w-4 md:size-5"
          />
          <p className="mr-1 hidden sm:block">Share</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="shad-dialog p-16 sm:p-8 mb-4">
        <DialogHeader className="space-y-2 p-16">
          <DialogTitle className="text-xl font-semibold">
            Manage who can view this project
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-400">
            Select which users can view and edit this document
          </DialogDescription>
        </DialogHeader>
        <div className="mt-2 space-y-2 mb-4">
          <Label
            htmlFor="email"
            className="text-sm font-medium text-blue-100 px-4"
          >
            Email address
          </Label>
          <div className="flex items-center gap-3 p-2 ">
            <div className="flex flex-1 items-center rounded-md bg-dark-400 ">
              <Input
                id="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="share-input px-4 "
              />
              <UserTypeSelector userType={userType} setUserType={setUserType} />
            </div>
            <Button
              type="submit"
              onClick={shareDocumentHandler}
              className="gradient-blue ml-2"
              disabled={loading}
            >
              {loading ? "Sending..." : "Invite"}
            </Button>
          </div>

          <div className="m-2 space-y-2">
            <ul className="flex flex-col">
              {collaborators.map((collaborator) => (
                <Collaborator
                  key={collaborator.id}
                  roomId={roomId}
                  creatorId={creatorId}
                  collaborator={collaborator}
                  email={collaborator.email}
                  user={user.info}
                />
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareModal;
