"use client";
import Image from "next/image";
import React, { useState } from "react";
import UserTypeSelector from "./UserTypeSelector";
import { Button } from "./ui/button";
import { updateDocumentAccess } from "@/lib/actions/room.actions";

const Collaborator = ({
  roomId,
  creatorId,
  collaborator,
  user,
}: CollaboratorProps) => {
  const [userType, setUserType] = useState(collaborator.userType || "viewer");
  const [loading, setLoading] = useState(false);
  const shareDocumentHandler = async (type: string) => {
    setLoading(true);
    await updateDocumentAccess({
      roomId,
      email: collaborator.email,
      userType: type as UserType,
      updatedBy: user,
    });
    setLoading(false);
  };
  const removeCollaboratorHandler = async () => {
    setLoading(true);
    // ... rest of the code ...
    setLoading(false);
  };
  return (
    <li className="flex items-center justify-between gap-2 py-3">
      <div className="flex gap-4">
        <Image
          src={collaborator.avatar}
          alt={collaborator.name}
          width={36}
          height={36}
          className="size-9 rounded-full"
        />
        <div>
          <p className="line-clamp-1 text-sm font-semibold leading-4 text-white">
            {collaborator.name}
            <span className="text-10-regular pl-2 text-blue-100">
              {loading && "Updating..."}
            </span>
          </p>
          <p className="text-sm font-light text-blue-100">
            {collaborator.email}
          </p>
        </div>
      </div>

      {creatorId === collaborator.id ? (
        <p className="text-sm text-blue-100">Owner</p>
      ) : (
        <div className="flex items-center">
          <UserTypeSelector
            userType={userType as UserType}
            setUserType={setUserType || "viewer"}
            onClickHandler={shareDocumentHandler}
          />
          <Button
            type="button"
            onClick={removeCollaboratorHandler}
          >
            Remove
          </Button>
        </div>
      )}
    </li>
  );
};

export default Collaborator;
