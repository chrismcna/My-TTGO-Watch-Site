#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
RUN curl -sL https://deb.nodesource.com/setup_10.x |  bash -
RUN apt-get install -y nodejs
COPY ["My-TTGO-Watch-Site.csproj", ""]
RUN dotnet restore "./My-TTGO-Watch-Site.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "My-TTGO-Watch-Site.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "My-TTGO-Watch-Site.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "My-TTGO-Watch-Site.dll"]