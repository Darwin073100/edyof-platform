import { execSync } from "child_process";

const runMigration = async () => {
  try {

    const command = process.argv[2] || "";

    switch (command) {
      case "run":
        const commandRun = `npx node --loader ts-node/esm -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:run -d src/infraestructure/database/app.data.source.ts`;
        console.log(`🚀 Corriendo las migraciones: ${command}`);
        execSync(commandRun, { stdio: "inherit" });
        break;
      case "revert":
        const commandRevert = `npx npx node --loader ts-node/esm -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:revert -d src/infraestructure/database/app.data.source.ts`;
        console.log(`🚀 Revirtiendo la última migración: ${commandRevert}`);
        execSync(commandRevert, { stdio: "inherit" });
        break;
      case "generate":
        const name = process.argv[3];
        if (!name) {
            console.error("❌ Debes proporcionar un nombre para la migración.");
            process.exit(1);
        }
        // Esta parte debería usar TypeORM CLI para generar migraciones
        const commandGenerate = `npx node --loader ts-node/esm ./node_modules/typeorm/cli.js migration:generate -d src/infraestructure/database/app.data.source.ts src/infraestructure/database/migrations/${name}`;
        
        console.log(`🚀 Ejecutando: ${command}`);
        execSync(commandGenerate, { stdio: "inherit" });
        break;
      default:
        console.error("Unknown command. Use 'run', 'revert', or 'generate'");
        process.exit(1);
    }

    console.log("Data Source has been closed!");
  } catch (error) {
    console.error("Error during migration:", error);
    process.exit(1);
  }
};

runMigration();