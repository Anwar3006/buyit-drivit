"use client";
import React, { useCallback, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button"; // Added missing Button import
import { FileXIcon, ImageIcon, Loader2Icon, SearchIcon, X } from "lucide-react";
// import { Switch } from "../ui/switch";
import * as Switch from "@radix-ui/react-switch";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const HomeSearchModal = ({ open, onClose }) => {
  const [textSearch, setTextSearch] = useState("");
  const [isImageSearchActive, setIsImageSearchActive] = useState(false);
  const [searchImage, setSearchImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const router = useRouter();

  const handleSearch = async (e) => {
    e.preventDefault();

    // Don't search if no input provided
    if (!textSearch && !searchImage) {
      toast.error("Please enter a search term or upload an image");
      return;
    }

    setIsSearching(true);
    try {
      let searchResults;

      // Decide which type of search to perform
      if (isImageSearchActive && searchImage) {
        // Image search
        const formData = new FormData();
        formData.append("image", searchImage);

        if (textSearch && textSearch.trim()) {
          formData.append("text", textSearch);
        }

        // Make API call for image search
        // const response = await fetch("/api/imageSearch", {
        //   method: "POST",
        //   body: formData,
        // });

        if (!response.ok) {
          throw new Error(`Image search failed: ${response.statusText}`);
        }

        searchResults = await response.json();
        toast.success("Image search completed successfully");
      } else {
        if (!textSearch.trim()) {
          throw Error("Search term not entered");
        }
        // Text search only
        const response = router.push(
          `/cars?search=${encodeURIComponent(textSearch)}`,
          {
            method: "GET",
          }
        );

        if (!response.ok) {
          throw new Error(`Text search failed: ${response.statusText}`);
        }

        searchResults = await response.json();
        toast.success("Search completed successfully");
      }

      onClose(false); // Close the search modal
    } catch (error) {
      console.error("Search error:", error);
      toast.error(`Search failed: ${error.message}`);
    } finally {
      setIsSearching(false);
    }
  };

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0];

      if (file.size > 5 * 1024 * 1024) {
        toast.error("Image size must be less than 5MB");
        return;
      }

      setSearchImage(file);
      setIsUploading(!isUploading);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setIsUploading(!isUploading);
        toast.success("Image read successfully");
      };

      reader.onerror = () => {
        setIsUploading(false);
        toast.error("Error reading image");
      };

      reader.readAsDataURL(file);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      onDrop,
      accept: {
        "image/*": [".jpeg", ".jpg", ".png", ".gif", ".webp"],
      },
      maxSize: 5 * 1024 * 1024, // 5MB
    });

  const removeImage = () => {
    setImagePreview("");
    setSearchImage(null);
    toast.info("Image removed", {
      icon: <FileXIcon className="h-6 w-6 stroke-red-600 fill-red-300" />,
      position: "top-right",
    });
  };
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-xl w-full max-h-[90vh] overflow-y-scroll">
        <DialogHeader>
          <DialogTitle className="text-sm md:text-base">
            Search for your next companion like a Boss!😎
          </DialogTitle>
          <DialogDescription className="text-xs md:text-base">
            Enter make, model of vehicle or use our AI image search
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 pt-4">
          <form
            className="grid grid-cols-2 items-center gap-4"
            onSubmit={handleSearch}
          >
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              className="col-span-2 text-sm md:text-base"
              placeholder="Porsche Cayenne"
              value={textSearch}
              onChange={(e) => setTextSearch(e.target.value)}
            />

            {/* Toggle  Image Search */}
            <div className="flex flex-col items-center space-y-5 col-span-2">
              <div className="flex items-center space-x-2 mt-2">
                <Switch.Root
                  id="airplane-mode"
                  checked={isImageSearchActive}
                  onCheckedChange={setIsImageSearchActive}
                  className={`
                            w-14 h-8 bg-gray-400 rounded-full relative
                            transition-colors duration-500
                            data-[state=checked]:bg-zinc-900
                          `}
                >
                  <Switch.Thumb
                    className={`
                              block w-6 h-6 bg-white rounded-full shadow
                              transition-transform duration-500
                              translate-x-1
                              data-[state=checked]:translate-x-7
                            `}
                  />
                </Switch.Root>
                <Label htmlFor="airplane-mode" className="text-xs md:text-base">
                  Enable Image Search
                </Label>
              </div>

              {isImageSearchActive && (
                <div className="space-y-6 w-full">
                  <div>
                    <h2 className="text-lg font-medium">AI Image Search</h2>
                    <p className="text-sm text-gray-500">
                      Upload image of the car.
                    </p>
                  </div>

                  {isDragReject && (
                    <span className="text-sm text-red-500">
                      Invalid Image Type
                    </span>
                  )}

                  {!imagePreview && (
                    <div
                      className="rounded-lg border-2 border-dashed border-gray-300 p-6 text-center"
                      {...getRootProps()}
                    >
                      <input {...getInputProps()} />
                      <label
                        htmlFor="search-image"
                        className="inline-flex cursor-pointer flex-col items-center justify-center"
                      >
                        <ImageIcon className="h-12 w-12 text-gray-400" />

                        {isDragActive && !isDragReject ? (
                          <span className="mt-2 text-sm font-medium text-gray-700">
                            Drop the files here
                          </span>
                        ) : (
                          <span className="mt-2 text-sm font-medium text-gray-700">
                            Drag and drop images here, or click to select files
                          </span>
                        )}

                        <span className="mt-1 text-xs text-gray-500">
                          JPG, PNG, GIF, WEBP up to 10MB
                        </span>
                      </label>
                    </div>
                  )}

                  {/* Image Preview Grid */}
                  {imagePreview && (
                    <div className="mt-6">
                      <div className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 shadow-2xl">
                        <img
                          src={imagePreview}
                          alt={`Search Image`}
                          className="h-full w-full object-contain"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100">
                          <button
                            type="button"
                            onClick={removeImage}
                            className="rounded-full bg-red-500 p-1 text-white hover:bg-red-600"
                          >
                            <X className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </form>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={handleSearch}
            className="hover:cursor-pointer w-full"
            disabled={isSearching}
          >
            {isSearching ? (
              <>
                <Loader2Icon className="h-4 w-4 animate-spin" />
                <span>Searching...</span>
              </>
            ) : (
              <>
                <SearchIcon className="h-4 w-4" />
                <span>Search</span>
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default HomeSearchModal;
