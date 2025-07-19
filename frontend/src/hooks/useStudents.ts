import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../api/axios";
import { data } from "react-router-dom";

export function useStudent(): any {
  return useQuery({
    queryKey: ["students"],
    queryFn: async () => {
      const { data } = await api.get("/students");
      return data;
    },
  });
}

export function useAddStudent(): any {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (newStudent: any) => {
      const { data } = await api.post("/students", newStudent);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["students"] });
    },
    onError: (error: any) => {
      console.error(" Add student failed", error.message);
    },
  });
}

export function useUpdateStudent(): any {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (updateStudent: any) => {
      const { data } = await api.put("/students", updateStudent);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["students"] });
    },
    onError: (error: any) => {
      console.error("Update students Failed", error.message);
    },
  });
}
